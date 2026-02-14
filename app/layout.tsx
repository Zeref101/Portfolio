import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";

const myFont = localFont({
  src: [
    {
      path: "../public/fonts/gotham-bold.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-gotham",
});

export const jpFont = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jp',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-poppins",
//   display: "swap",
// });

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyas-mohanty-portfolio.vercel.app"),

  title: {
    default: "Shreyas Mohanty – Software Engineer",
    template: "%s | Shreyas Mohanty",
  },

  description:
    "Software Engineer specializing in full-stack development with Next.js, React, TypeScript, and Node.js. Experience building scalable systems, real-time applications, and workflow automation platforms.",

  keywords: [
    "Shreyas Mohanty",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "Portfolio",
    "Web Developer",
    "Backend Developer",
  ],

  authors: [{ name: "Shreyas Mohanty" }],

  creator: "Shreyas Mohanty",

  openGraph: {
    title: "Shreyas Mohanty – Software Engineer Portfolio",

    description:
      "Portfolio of Shreyas Mohanty, Software Engineer experienced in full-stack development, real-time systems, and scalable applications using modern web technologies.",

    url: "https://shreyas-mohanty-portfolio.vercel.app",

    siteName: "Shreyas Mohanty Portfolio",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Shreyas Mohanty Software Engineer Portfolio",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Shreyas Mohanty – Software Engineer",

    description:
      "Full-Stack Software Engineer building scalable apps, real-time systems, and modern web platforms.",

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark`}>
      <body
        className={`${geistSans.variable} ${jpFont.variable} ${geistMono.variable} ${myFont.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
