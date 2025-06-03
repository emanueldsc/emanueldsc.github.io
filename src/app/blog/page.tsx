import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import path from 'path';
import './masonry.sass';
import PostImage from './PostImage';

type Post = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  thumb: string;
  // adicione outros campos se necessário
};

export default function BlogIndexPage() {
  const postsDirectory = path.join(process.cwd(), 'src/app/blog/posts')
  const postFiles = fs.readdirSync(postsDirectory)

  const posts: Post[] = postFiles.map((filename) => {
    const slug = filename.replace('.md', '')

    // Lê o conteúdo do arquivo Markdown
    const filePath = path.join(postsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Extrai metadados do Markdown usando gray-matter
    const { data: metadata } = matter(fileContent);

    return {
      slug,
      ...metadata,
    } as Post;
  });

  // Função para converter string dd/MM/yyyy em Date
  function parseDateBR(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }

  function sortPost(
    leftPost: Post,
    rightPost: Post
  ): number {
    const leftDate = parseDateBR(leftPost.date);
    const rightDate = parseDateBR(rightPost.date);
    // Ordena do mais recente para o mais antigo
    return rightDate.getTime() - leftDate.getTime();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-primary">Últimos Posts</h1>
      <div className="masonry-grid">
        {posts.sort(sortPost).map((post) => (
          <div key={post.slug} className="masonry-item">
            {/* Uso do Client Component para a imagem */}
            <PostImage src={post.thumb} alt={post.title} />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.summary}</p>
              <p className="text-gray-500 text-sm">{post.date}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-blue-600 hover:underline veja-mais"
              >
                Leia mais
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
