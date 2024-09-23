import fs from 'fs';
import matter from "gray-matter";
import Image from 'next/image';
import Link from 'next/link';
import path from "path";

export default function Home() {

  const articleDirectory = path.join(process.cwd(), 'src/app/editorials/articles')
  const articleFiles = fs.readdirSync(articleDirectory)

  const articles = articleFiles.map((filename) => {
    const slug = filename.replace('.md', '')

    // Read markdown article content
    const filePath = path.join(articleDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    // Extract markdown metadata use gray-matter
    const { data: metadata } = matter(fileContent)

    return {
      slug,
      ...metadata
    }
  })

  const cover: any = articles.find((a: any) => a.cover)

  console.log('cover', cover)
  console.log('articles', articles)

  return (
    <div className="container mt-4 mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        {/* Coluna Principal */}
        <div className="w-full lg:w-2/3 px-4 mb-8">
          {/* Artigo em Destaque */}
          <div className="bg-white p-6 shadow-md rounded-lg mb-6 relative overflow-hidden">
            <Image
              width={100}
              height={100}
              src={cover.thumb}
              alt="Artigo em Destaque"
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-6">
              <div className="text-white">
                <h1 className="text-4xl font-bold mb-4">Destaque {cover?.title}</h1>
                <p className="mb-6">{cover?.summary}</p>
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Leia Mais
                </a>
              </div>
            </div>
          </div>
          {/* Lista de Artigos */}
          <div className="space-y-6">
            {
              articles.map((article: any, index: number) => (
                <div key={index} className="flex items-center bg-white p-4 shadow-md rounded-lg">
                  <Image
                    width={100}
                    height={100}
                    src={article.thumb}
                    alt={article.slig}
                    className="w-1/3 h-24 object-cover rounded-lg mr-4"
                  />
                  <div>
                    <h2 className="text-2xl font-semibold">{article.title}</h2>
                    <p className="text-gray-600">{article.summary}</p>
                    <Link href={`/editorials/${article.slug}`} className='text-blue-600 hover:underline'>
                      Leia mais
                    </Link>
                    {/* <a href="#" className="text-blue-600 hover:underline"></a> */}
                  </div>
                </div>
              ))
            } 
          </div>
        </div>

        {/* Coluna Secundária */}
        <div className="w-full lg:w-1/3 px-4">
          <div className="bg-white p-6 shadow-md rounded-lg mb-6">
            <h2 className="text-2xl font-bold mb-4">Posts Recentes</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-blue-600 hover:underline">Post 1</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Post 2</a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">Post 3</a>
              </li>
            </ul>
          </div>

          {/* Widget de Assinatura ou Promoção */}
          <div className="bg-gray-100 p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Assine Nossa Newsletter</h2>
            <p className="text-gray-700 mb-4">Receba as últimas notícias diretamente no seu e-mail.</p>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Inscrever-se
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
