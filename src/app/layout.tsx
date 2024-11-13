import Topbar from '@/components/Topbar';
import './globals.css';

export const metadata = {
  title: 'Meu Blog Angular',
  description: 'Um blog sobre Angular e desenvolvimento web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-BR">
      <body>
        <Topbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
