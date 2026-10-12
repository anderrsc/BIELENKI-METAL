import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bielenki Metal | ERP",
  description: "Gestão empresarial Bielenki Metal",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
