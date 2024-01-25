import classNames from 'classnames';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Интернет-магазин игровых ПК PCASSEBLY',
  description: 'Интренет-магазин игровых ПК, сборик на заказ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className='h-full'>
      <head>
        <link rel='icon' href='/favicon.ico' type="image/ico" sizes="16x16" />
      </head>
      <body
        className={classNames(
          inter.className,
          'h-full'
        )}
      >
        {children}
      </body>
    </html>
  );
}
