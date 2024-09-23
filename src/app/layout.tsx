import Topbar from '@/components/Topbar';
import './globals.css';

export const metadata = {
  title: 'Meu Blog Angular',
  description: 'Um blog sobre Angular e desenvolvimento web',
};

export default function RootLayout({ children, params }: { children: React.ReactNode, params: any }) {
  const currentPath = `/${params.slug ? `blog/${params.slug}` : ''}`.replace(/\/$/, '');

  return (
    <html lang="pt-BR">
      <body>
        <Topbar currentPath={currentPath} />
        <main>{children}</main>
      </body>
    </html>
  );
}
