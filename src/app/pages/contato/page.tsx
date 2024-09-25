import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Contact() {

    const avatar = Date.now() % 2 == 0 ? '/images/avatar.jpg' : '/images/_avatar.jpg'

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white p-6 shadow-md rounded-lg flex flex-col md:flex-row">
                {/* Coluna da Imagem com menos espaço */}
                <div className="md:w-1/3 flex justify-center items-center mb-8 md:mb-0">
                    <Image
                        width={100}
                        height={100}
                        src={avatar}
                        alt="Avatar"
                        style={{ objectPosition: '20%' }}
                        className="rounded-lg shadow-lg w-full h-full max-w-md object-cover"
                    />
                </div>

                {/* Coluna das Informações de Contato com mais espaço */}
                <div className="md:w-2/3">
                    <h1 className="text-4xl font-bold mb-6 text-primary">Entre em Contato</h1>
                    <p className="text-gray-700 mb-4">
                        <strong>Email:</strong> <a href="mailto:emanuel.douglas.sc@gmail.com" className="text-blue-600 hover:underline">emanuel.douglas.sc@gmail.com</a>
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>Telefone:</strong> <a href='http://wa.me/5585987469307?text=Olá! Consegui seu contato através do seu site e gostaria de conversar mais. Aguardo seu retorno!' target='_blank'> +55 (85) 99846-9307</a>
                    </p>
                    <p className="text-gray-700 mb-4">Siga-me nas redes sociais:</p>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faGithub} className="text-black mr-2 w-10" />
                            <a href='https://github.com/emanueldsc' target='_blank' className="text-blue-600 hover:underline">
                                Github
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 mr-2 w-10" />
                            <a href='http://wa.me/5585987469307?text=Olá! Consegui seu contato através do seu site e gostaria de conversar mais. Aguardo seu retorno!' target='_blank' className="text-blue-600 hover:underline">
                                Whatsapp
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 mr-2 w-10" />
                            <a href="https://ig.me/m/emanuel.douglas.sc" target='_blank' className="text-blue-600 hover:underline">
                                Instagram
                            </a>
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 mr-2 w-10" />
                            <a href="https://www.linkedin.com/in/emanueldouglas/" target='_blank' className="text-blue-600 hover:underline">
                                LinkedIn
                            </a>
                        </li>
                        {/* <li className="flex items-center">
              <FontAwesomeIcon icon={faTwitter} className="text-blue-400 mr-2 w-10" />
              <a href="https://twitter.com" className="text-blue-600 hover:underline">
                Twitter
              </a>
            </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
}
