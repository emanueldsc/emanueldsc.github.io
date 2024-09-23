export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-primary">Sobre Nós</h1>
        <p className="text-gray-700 mb-4">
          Bem-vindo ao nosso blog dedicado ao desenvolvimento com Angular! Nosso objetivo é fornecer
          conteúdo de qualidade, com tutoriais, dicas e artigos que ajudem desenvolvedores a aprimorar
          suas habilidades e se manterem atualizados com as últimas tendências e melhores práticas
          no desenvolvimento web.
        </p>
        <p className="text-gray-700 mb-4">
          Este blog foi criado por desenvolvedores apaixonados por tecnologia e comprometidos em
          compartilhar conhecimento. Aqui, você encontrará desde conteúdos para iniciantes, que estão
          dando os primeiros passos com Angular, até artigos mais avançados para desenvolvedores experientes.
        </p>
        <p className="text-gray-700 mb-4">
          Estamos sempre buscando melhorar e expandir nosso conteúdo, então não hesite em entrar em contato
          conosco se tiver sugestões ou perguntas. Seu feedback é muito importante para nós!
        </p>
        <p className="text-gray-700 mb-4">
          Esperamos que você aproveite o conteúdo e que ele ajude a elevar suas habilidades de desenvolvimento
          para o próximo nível. Fique à vontade para explorar, aprender e compartilhar!
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Nossa Missão</h2>
        <p className="text-gray-700 mb-4">
          Nossa missão é criar uma comunidade de desenvolvedores mais forte e informada, onde o conhecimento
          é compartilhado livremente e onde todos têm a oportunidade de aprender e crescer.
        </p>
        <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Contato</h2>
        <p className="text-gray-700">
          Se você quiser saber mais sobre nós ou tem alguma pergunta, não hesite em nos contatar:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Email: <a href="mailto:contato@blogangular.com" className="text-blue-600 hover:underline">contato@blogangular.com</a></li>
          <li>Twitter: <a href="https://twitter.com/blogangular" className="text-blue-600 hover:underline">@blogangular</a></li>
          <li>LinkedIn: <a href="https://linkedin.com/in/blogangular" className="text-blue-600 hover:underline">LinkedIn</a></li>
        </ul>
      </div>
    </div>
  );
}
