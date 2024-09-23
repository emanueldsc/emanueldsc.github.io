import Link from 'next/link';

export default function Topbar({ currentPath }: { currentPath: string }) {
  const isActive = (path: string) => currentPath === path;

  return (
    <header className="bg-neutral-light shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/">
                <span className="text-xl font-semibold text-primary">Types EDSC</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className={`${
                  isActive('/') ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  isActive('/about') ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Sobre
              </Link>
              <Link
                href="/blog"
                className={`${
                  isActive('/blog') ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Blog
              </Link>
              <Link
                href="/pages/angular"
                className={`${
                  isActive('/pages/angular') ? 'border-primary text-primary' : 'border-transparent text-neutral-dark hover:text-primary'
                } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
              >
                Angular
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button
              type="button"
              className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-dark"
            >
              Contato
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
