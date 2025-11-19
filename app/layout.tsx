import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { DemoFormProvider } from "@/components/forms/DemoFormProvider";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ClicUp | La Plataforma Todo-en-Uno para Negocios Hispanos",
    template: "%s | ClicUp",
  },
  description: "Convierte más visitantes en clientes leales con la plataforma de marketing y ventas diseñada para negocios locales hispanos.",
  keywords: ["marketing", "crm", "automatización", "negocios hispanos", "gohighlevel", "saas"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-primary-foreground flex flex-col",
          inter.variable,
          outfit.variable
        )}
      >
        <DemoFormProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </DemoFormProvider>
      </body>
    </html>
  );
}
