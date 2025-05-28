import OpenAI from 'openai';
import matter from 'gray-matter';
import fs from 'fs/promises';
import path from 'path';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

interface Frontmatter {
  title: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  client: string;
  category: string;
  [key: string]: any;
}

export async function translateMarkdownFile(ptFilePath: string): Promise<void> {
  try {
    // Read the Portuguese markdown file
    const ptContent = await fs.readFile(ptFilePath, 'utf-8');
    const { data: ptFrontmatter, content: ptMarkdown } = matter(ptContent);

    // Translate frontmatter
    const enFrontmatter: Frontmatter = {
      title: await translateText(ptFrontmatter.title),
      description: await translateText(ptFrontmatter.description),
      tags: ptFrontmatter.tags, // Keep tags as is since they're usually technical terms
      role: await translateText(ptFrontmatter.role),
      year: ptFrontmatter.year, // Keep year as is
      client: ptFrontmatter.client, // Keep client name as is
      category: await translateText(ptFrontmatter.category),
      ...ptFrontmatter // Keep any additional frontmatter fields
    };

    // Translate markdown content
    const enMarkdown = await translateText(ptMarkdown);

    // Create the English markdown file content
    const enContent = matter.stringify(enMarkdown, enFrontmatter);

    // Determine the English file path
    const enFilePath = ptFilePath.replace('/pt/', '/en/');
    
    // Ensure the directory exists
    await fs.mkdir(path.dirname(enFilePath), { recursive: true });

    // Write the English file
    await fs.writeFile(enFilePath, enContent, 'utf-8');

    console.log(`Successfully created English version: ${enFilePath}`);
  } catch (error) {
    console.error('Error translating markdown file:', error);
    throw error;
  }
}

async function translateText(text: string): Promise<string> {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a professional translator. Translate the following text from Portuguese to English, maintaining any markdown formatting, HTML tags, and technical terms. Keep URLs, code blocks, and technical terms unchanged."
        },
        {
          role: "user",
          content: text
        }
      ],
      temperature: 0.3, // Lower temperature for more consistent translations
    });

    return completion.choices[0].message.content || text;
  } catch (error) {
    console.error('Error translating text:', error);
    return text; // Return original text if translation fails
  }
} 