import fs from 'fs/promises';
import path from 'path';

export async function loadMarkdownContent(markdownPath: string): Promise<string> {
  try {
    // Remove leading slash if present
    const cleanPath = markdownPath.startsWith('/') ? markdownPath.slice(1) : markdownPath;
    
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

  // Set up file watcher
  const watcher = fs.watch(path.dirname(filePath), async (eventType, filename) => {
    if (filename && filename === path.basename(filePath)) {
      const updatedContent = await loadMarkdownContent(filePath);
      callback(updatedContent);
    }
  });

  // Return cleanup function
  return () => {
    watcher.close();
  };
} 