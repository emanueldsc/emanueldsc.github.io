import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './blog.sass';

type BlogPostPageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'src/app/blog/posts', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');

  const { data: metadata, content } = matter(fileContent);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <p className="text-sm text-gray-500 mb-1">{metadata.date} {metadata.author ? ' - ' +  metadata.author : ''}</p>
      <ReactMarkdown className="prose max-w-none post" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts');
  const postFiles = fs.readdirSync(postsDirectory);

  return postFiles.map((filename) => ({
    slug: filename.replace('.md', ''),
  }));
}
