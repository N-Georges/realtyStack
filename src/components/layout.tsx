import { ReactNode } from "react";
import { Inter } from "next/font/google";
import Header from "./common/Header";

const roboto = Inter({
  subsets: ["latin"],
});

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={roboto.className}>
      <Header />
      <main className="px-5 mx-auto ">{children}</main>
    </div>
  );
};

export default Layout;
