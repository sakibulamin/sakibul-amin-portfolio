import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  icons: "/image/saki.png",
  title: "Sakibul Amin",
  description: "Portfolio of Sakibul Amin — Web Designer and Developer.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
