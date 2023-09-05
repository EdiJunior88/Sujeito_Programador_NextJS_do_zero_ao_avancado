"use client";
import "../../styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Header from "./components/header/page";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tarefas+ | Organize suas tarefas de forma fácil",
  description: "Generated by sujeito Programador",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "/favicon/favicon-16x16.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/favicon/apple-touch-icon.png",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <link rel='icon' href='favicon.ico' type='image/png' sizes='32x32' />
      <body className={roboto.className}>
        <SessionProvider>
          <Header />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
