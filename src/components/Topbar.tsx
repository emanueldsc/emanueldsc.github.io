import Link from 'next/link';
import { useState } from 'react';

export default function Topbar({ currentPath }: { currentPath: string }) {

  const [active, useActive] = useState('/')

  return (
    <header className="bg-neutral-light shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" onClick={() => useState('/')}>
                <span className="text-xl font-semibold text-primary">EDSC.GitHub</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                onClick={() => useState('/')}
                className={`${active === '/' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                onClick={() => useState('/blog')}
                className={`${active === '/blog' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Blog
              </Link>
              <Link
                href="/about"
                onClick={() => useState('/about')}
                className={`${active === '/about' ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Sobre
              </Link>

              {/* <Link
                href="/pages/angular"
                className={`${
                  isActive('/pages/angular') ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Angular
              </Link> */}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/pages/contato">
              <button
                type="button"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
              > Contato
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
