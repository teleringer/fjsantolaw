
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico, Roboto } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Law Offices of Frank J. Santomauro, L.L.C. - Experienced Attorney in Scranton, PA",
  description: "Experienced legal representation in Scranton, PA. Specializing in Civil Law, Criminal Defense, Family Law, Real Estate, and more. Call (570) 342-7787 for consultation.",
  keywords: "attorney Scranton PA, lawyer Pennsylvania, legal services, civil law, criminal defense, family law, real estate law, Frank Santomauro",
  authors: [{ name: "Frank J. Santomauro, Esq." }],
  openGraph: {
    title: "Law Offices of Frank J. Santomauro, L.L.C.",
    description: "Experienced legal representation in Scranton, PA. Call (570) 342-7787 for consultation.",
    type: "website",
    locale: "en_US",
    siteName: "Law Offices of Frank J. Santomauro, L.L.C.",
  },
  twitter: {
    card: "summary",
    title: "Law Offices of Frank J. Santomauro, L.L.C.",
    description: "Experienced legal representation in Scranton, PA. Call (570) 342-7787 for consultation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={`${roboto.variable} ${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased font-roboto`}
        style={{fontSize: '15px'}}
      >
        {children}
      </body>
    </html>
  );
}
