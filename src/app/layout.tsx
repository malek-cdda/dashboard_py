import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import CustomProvider from "../redux/Provider";
import MenuBar from "@/components/Menubar/Menu/Index";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <CustomProvider>
          <MenuBar>{children} </MenuBar>
        </CustomProvider>
      </body>
    </html>
  );
}
