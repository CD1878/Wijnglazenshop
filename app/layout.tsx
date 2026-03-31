import type {Metadata} from 'next';
import { Montserrat, Cormorant_Garamond } from 'next/font/google';
import './globals.css'; // Global styles

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'VinoGlass | Premium Wine Glasses',
  description: 'A clean, sleek, and simple webshop for premium wine glasses.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-sans bg-white text-black antialiased selection:bg-black selection:text-white" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
