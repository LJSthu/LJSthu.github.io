import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getMarkdownContent(filename: string) {
  const contentDirectory = path.join(process.cwd(), 'content');
  const filePath = path.join(contentDirectory, `${filename}.md`);

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    frontmatter: data,
    content,
  };
}
