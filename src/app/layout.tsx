import type { Metadata } from "next";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@/components/theme-provider";
import { ManagedUIContext } from "@/contexts/ui-contenxt";

import "./globals.css";
import "@mantine/dropzone/styles.css";

export const metadata: Metadata = {
  title: "Vcomm",
  description: "A modern e-commerce platform",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/favicon/favicon-32x32.png",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={``}>
          <MantineProvider>
            <ManagedUIContext>
              <ThemeProvider
                attribute="class"
                defaultTheme="light"
                enableSystem
                disableTransitionOnChange
              >
                {children}
              </ThemeProvider>
            </ManagedUIContext>
          </MantineProvider>
        </body>
      </html>
    </>
  );
}
