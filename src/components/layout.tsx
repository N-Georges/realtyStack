import { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const roboto = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={roboto.className}>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
