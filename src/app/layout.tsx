// src/app/layout.tsx
import Header from '@/components/shared/Header';
import NavbarMenu from '@/components/shared/NavbarMenu';


import { Ubuntu } from '@next/font/google';


const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Ruben Fernando Nani',
  description: 'Seguros',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        {/* <Header/> */}
        <NavbarMenu/>
        
        {children}
      </body>
    </html>
  );
}
