import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "./common/Header";

const roboto = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
});

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={roboto.className}>
      <Header />
      <main className="">{children}</main>
    </div>
  );
};

export default Layout;
