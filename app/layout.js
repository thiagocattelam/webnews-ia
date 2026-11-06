import { Bangers, Nunito } from "next/font/google";
import "./globals.css";

const titulo = Bangers({
  weight: "400",
  subsets: ["latin"],
  variable: "--fonte-titulo",
});

const texto = Nunito({
  weight: ["600", "800"],
  subsets: ["latin"],
  variable: "--fonte-texto",
});

export const metadata = {
  title: "Depois que eu te dei nos dedos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${titulo.variable} ${texto.variable}`}>
      <body>{children}</body>
    </html>
  );
}
