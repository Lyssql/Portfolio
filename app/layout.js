import './globals.css';
import Layout from '@/components/Layout';

export const metadata = {
  title: 'Portfolio – Étudiant·e en biotechnologies',
  description:
    'Portfolio d’un·e étudiant·e en ingénierie, orienté Innovation, R&D, Biomatériaux et environnement.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
