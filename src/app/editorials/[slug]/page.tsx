import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/app/editorials/articles', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: metadata, content } = matter(fileContent);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <p className="text-sm text-gray-500 mt-8 mb-1">{metadata.date}</p>
      <ReactMarkdown className="prose prose-lg" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/editorials/articles');
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
