import './globals.css';
import { Nav } from '@/components/nav';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto min-h-screen max-w-5xl p-4">
          <header className="mb-6 flex items-center justify-between">
            <h1 className="text-2xl font-semibold">FitCoach AI</h1>
          </header>
          {children}
          <Nav />
        </main>
      </body>
    </html>
  );
}
