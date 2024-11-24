export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-4xl font-bold mb-6 text-primary">Sobre mim</h1>
        <p className="text-gray-700 mb-4">
          👋 Olá!
          Sou um Desenvolvedor Fullstack especializado em desenvolvimento frontend, com forte ênfase em Angular e Vue. Tenho experiência na criação de interfaces dinâmicas utilizando as três principais ferramentas do mercado: Angular, Vue e React.
          No desenvolvimento para Android, utilizo Java e Kotlin para desenvolver aplicativos que atendem a diversas necessidades do mercado.
          No backend, minha expertise inclui o desenvolvimento de APIs com Node.js, Java e Kotlin, utilizando frameworks como Spring e ferramentas como Swagger. Tenho conhecimento na criação de relatórios com JasperReports, utilizando tanto o iReport quanto o Jaspersoft Studio.
          Possuo experiência com bancos de dados SQL, como MySQL e PostgreSQL, além de proficiência em soluções NoSQL, como MongoDB, Firebase Realtime Database e Firestore.
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Email: <a href="mailto:emanuel.douglas.sc@gmail.com" className="text-blue-600 hover:underline">emanuel.douglas.sc@gmail.com</a></li>
          <li>LinkedIn: <a target='_blank' href="https://linkedin.com/in/emanueldouglas" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li>Github: <a target='_blank' href="https://github.com/emanueldsc" className="text-blue-600 hover:underline">GitHub</a></li>
        </ul>
      </div>
    </div>
  );
}
