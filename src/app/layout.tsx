import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
// const poppins = localFont({
//   src: './fonts/Poppins-Regular.ttf',
//   variable: '--font-poppins',
// })

const roboto = Roboto({
  variable: "--font-roboto",
  display: "swap",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "RR World",
    template: "%s | RR World",
  },
  description: "RR World brings education, creativity, service and Happiness Mantra guidance into one practical ecosystem.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable}  ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col w-full bg-white">
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
