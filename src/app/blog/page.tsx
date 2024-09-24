import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import './masonry.sass';
import PostImage from './PostImage';

export default function BlogIndexPage() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')
  const postFiles = fs.readdirSync(postsDirectory)

  const posts = postFiles.map((filename) => {
    const slug = filename.replace('.md', '')

    // Lê o conteúdo do arquivo Markdown
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Extrai metadados do Markdown usando gray-matter
    const { data: metadata } = matter(fileContent);

    return {
      slug,
      ...metadata,
    };
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Últimos Posts</h1>
      <div className="masonry-grid">
        {posts.map((post: { [key: string]: string }) => (
          <div key={post.slug} className="masonry-item">
            {/* Uso do Client Component para a imagem */}
            <PostImage src={post.thumb} alt={post.title} />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
                Leia mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
