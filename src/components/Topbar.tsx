"use client"

import Link from 'next/link';
import { useState } from 'react';

export default function Topbar() {

  const [active, setActive] = useState('/')
  const defaultLinkMenu = 'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
  const linkActivate = 'border-primary text-primary'
  const linkNotActivate = 'border-transparent text-neutral-dark hover:text-primary'

  return (
    <header className="bg-neutral-light shadow" style={{backgroundColor:'#ffffff88'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" onClick={() => setActive('/')}>
                <span className="text-xl font-semibold text-primary">EDSC.GitHub</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                onClick={() => setActive('/')}
                className={`${active === '/' ? linkActivate : linkNotActivate } ${defaultLinkMenu}`}
              >
                Home
              </Link>
              <Link
                href="/blog"
                onClick={() => setActive('/blog')}
                className={`${active === '/blog' ? linkActivate : linkNotActivate } ${defaultLinkMenu}`}
              >
                Blog
              </Link>
          
              <Link
                href="/about"
                onClick={() => setActive('/about')}
                className={`${active === '/about' ? linkActivate : linkNotActivate } ${defaultLinkMenu}`}
              >
                Sobre
              </Link>
          
              <Link
                href="/portfolio"
                onClick={() => setActive('/portfolio')}
                className={`${active === '/portfolio' ? linkActivate : linkNotActivate } ${defaultLinkMenu}`}
              >
                Portfólio 
              </Link>
              
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link href="/pages/contato">
              <button
                type="button"
                className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
              > Contatos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
