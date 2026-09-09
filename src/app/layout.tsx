import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { ModalProvider } from "@/components/ModalContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ConsultModal from "@/components/ConsultModal";
import BackToTop from "@/components/BackToTop";
import YandexMetrika from "@/components/YandexMetrika";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["cyrillic", "latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bezstressoff.ru"),
  title: {
    default: "Психологическое пространство bezstressoff.ru — Марина Сидорова",
    template: "%s — Психологическое пространство bezstressoff.ru",
  },
  description:
    "Психологическое пространство bezstressoff.ru — Марина Сидорова, клинический психолог и психотерапевт. Индивидуальные консультации, групповая работа, супервизия.",
  keywords: [
    "психологическая помощь",
    "психолог Москва",
    "индивидуальная консультация психолога",
    "групповая психотерапия",
    "супервизия",
  ],
  authors: [{ name: "Марина Сидорова" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "https://bezstressoff.ru/",
    title: "Психологическое пространство bezstressoff.ru",
    description: "Индивидуальные консультации, групповая работа и супервизия с клиническим психологом Мариной Сидоровой.",
    images: ["/icon-512.png"],
  },
};

export const viewport = {
  themeColor: "#FBF7F1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <YandexMetrika />
        <ModalProvider>
          <Header />
          {children}
          <Footer />
          <ConsultModal />
        </ModalProvider>
        <BackToTop />
      </body>
    </html>
  );
}
