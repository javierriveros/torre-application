import Head from "next/head";
import "twin.macro";

import { Navbar } from "@/components/Navbar";

export const Layout: React.FC<{ title?: string }> = ({
  title = "The next-generation professional network",
  children,
}) => (
  <>
    <Head>
      <title>Torre - {title}</title>
    </Head>
    <Navbar />
    <main tw="w-full bg-gray-50 pt-16">{children}</main>
  </>
);
