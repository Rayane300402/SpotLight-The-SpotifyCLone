import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
;

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SpotLight",
  description: "Listen to music from your favorite artists.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* we have the children wrapped, but they're not rendering anywhere */}
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
