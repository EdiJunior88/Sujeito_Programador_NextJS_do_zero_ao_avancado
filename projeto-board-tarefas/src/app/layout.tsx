import "../../styles/globals.css";
import { Roboto } from "next/font/google";
import Header from "./components/header/page";
import { NextAuthProvider } from "./providers";

export const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <link rel='icon' href='favicon.ico' type='image/png' sizes='32x32' />
      <body className={roboto.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
