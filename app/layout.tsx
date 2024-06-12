import DesignerContextProvider from "@/components/context/DesignerContext";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const roboto = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder",
  description: "Made by berkozkn999",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={roboto.className}>
          <NextTopLoader />
          <DesignerContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              {children}
              <Toaster />
            </ThemeProvider>
          </DesignerContextProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
