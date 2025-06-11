import { Figtree } from "next/font/google";

import CopyrightFooter from "@/features/CopyrightFooter";

import "./globals.css";
import { siteConfig } from "@/config/siteConfig";

const figTree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export const metadata = {
  title: `Homepage` + siteConfig.seo.websiteSuffix,
  description: siteConfig.seo.metaDescription,
  keywords: siteConfig.seo.metaKeywords,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${figTree.variable} md:bg-black mx-auto antialiased md:px-6`}>
        <div className="page mx-auto max-w-screen-2xl">
          {children}

          <CopyrightFooter
            text={`© ${new Date().getFullYear()} All rights reserved.`}
            links={[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms & Conditions", href: "/terms" },
              { label: "Cookie Policy", href: "/cookie-policy" },
            ]}
          />
        </div>
      </body>
    </html>
  );
}
