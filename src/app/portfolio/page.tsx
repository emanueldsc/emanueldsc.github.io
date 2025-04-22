import { projects } from "./projects";

export default function Portifolio() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Portfólio</h1>
            <p className="text-lg mb-8">
                Aqui estão alguns dos meus projetos pessoais <br />
                Para mais acesse <a href="https://github.com/emanueldsc">Github.com/emanueldsc</a>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {projects.map((projeto, index) => (
                    <div key={index} className="bg-white shadow-md rounded-lg p-6">
                        <img src={projeto.image} alt={projeto.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                        <h2 className="text-xl font-semibold mb-2">{projeto.title}</h2>
                        <p className="text-gray-700 mb-4">{projeto.description}</p>
                        <a href={projeto.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mr-4">Ver Projeto</a>
                        <a href={projeto.github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Ver no Github</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

