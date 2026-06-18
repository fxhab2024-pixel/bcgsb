import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bcgsp.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "BCGSP | سیستم عامل هوش استراتژیک کسب‌وکار",
    template: "%s | BCGSP",
  },
  description:
    "پلتفرم هوش مصنوعی رشد استراتژیک کسب‌وکار برای SMEها — تشخیص ۱۰۰ سؤالی، مشاور هوشمند، نقشه راه رشد و ردیابی اجرا",
  keywords: [
    "BCGSP",
    "هوش استراتژیک",
    "استراتژی کسب‌وکار",
    "مشاوره SME",
    "هوش مصنوعی کسب‌وکار",
    "تشخیص استراتژیک",
    "نقشه راه رشد",
    "آمادگی سرمایه‌گذاری",
    "Business Intelligence",
    "Strategic Planning",
  ],
  authors: [{ name: "BCGSP Team" }],
  creator: "BCGSP",
  publisher: "BCGSP",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: SITE_URL,
    siteName: "BCGSP",
    title: "BCGSP | سیستم عامل هوش استراتژیک کسب‌وکار",
    description:
      "از تشخیص تا استراتژی، از برنامه‌ریزی تا اجرا — همه‌چیز در یک پلتفرم یکپارچه",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BCGSP — Strategic Intelligence Operating System",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BCGSP | سیستم عامل هوش استراتژیک کسب‌وکار",
    description:
      "پلتفرم هوش مصنوعی رشد استراتژیک کسب‌وکار برای SMEها",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "business",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

// JSON-LD structured data for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BCGSP",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "سیستم عامل هوش استراتژیک کسب‌وکار — پلتفرم هوش مصنوعی رشد استراتژیک برای SMEها",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IRR",
    description: "ثبت‌نام رایگان با امکان ارتقا",
  },
  featureList: [
    "تشخیص استراتژیک ۱۰۰ سؤالی",
    "مشاور استراتژیک هوشمند",
    "توصیه‌های عملیاتی",
    "نقشه راه رشد سه‌فازی",
    "آمادگی سرمایه‌گذاری",
    "ردیابی اجرای استراتژی",
    "هوش تجاری (BI)",
    "مدیریت ارتباط مشتری (CRM)",
    "اتوماسیون گردش کار (BPM)",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster position="top-left" />
      </body>
    </html>
  );
}
