import fs from 'fs/promises';
import path from 'path';

export async function loadMarkdownContent(markdownPath: string): Promise<string> {
  try {    
    // Make a simple GET request to the markdown file
    const response = await fetch(markdownPath);
    if (!response.ok) {
      throw new Error(`Failed to load markdown content: ${response.statusText}`);
    }
    
    const content = await response.text();
    if (!content) {
      throw new Error('No content loaded from markdown file');
    }
    
    return content;
  } catch (error) {
    console.error('Error loading markdown content:', error);
    console.error('Attempted to load from path:', markdownPath);
    return '';
  }
}

export async function watchMarkdownFile(filePath: string, callback: (content: string) => void): Promise<() => void> {
  // Initial load
  const content = await loadMarkdownContent(filePath);
  callback(content);

  let abortController = new AbortController();
  
  // Start watching in background
  (async () => {
    try {
      const watcher = fs.watch(path.dirname(filePath), { signal: abortController.signal });
      for await (const event of watcher) {
        if (event.filename === path.basename(filePath)) {
          const updatedContent = await loadMarkdownContent(filePath);
          callback(updatedContent);
        }
      }
    } catch (error: any) {
      if (error?.name !== 'AbortError') {
        console.error('Watch error:', error);
      }
    }
  })();

  // Return cleanup function
  return () => {
    abortController.abort();
  };
} 