import type {Metadata, Viewport} from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css'; // Global styles
import LenisProvider from '@/components/LenisProvider';
import { colors } from '@/lib/tokens';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const PORTRAIT_PATH = '/portrait.jpg';
const SITE_URL = 'https://shahmakhdum.dev';
const SITE_DESCRIPTION =
  'Editorial portfolio of Shah Makhdum — Software & AI Engineer building intelligent systems, scalable architectures, and high-throughput AI pipelines from Bangladesh.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Shah Makhdum | Software & AI Engineer',
    template: '%s | Shah Makhdum',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Shah Makhdum',
    'Software Engineer',
    'AI Engineer',
    'Machine Learning',
    'Full-Stack Developer',
    'Portfolio',
    'Bangladesh',
  ],
  authors: [{ name: 'Shah Makhdum', url: SITE_URL }],
  creator: 'Shah Makhdum',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    title: 'Shah Makhdum | Software & AI Engineer',
    description: SITE_DESCRIPTION,
    siteName: 'Shah Makhdum',
    images: [
      {
        url: PORTRAIT_PATH,
        width: 800,
        height: 1000,
        alt: 'Shah Makhdum — portrait',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shah Makhdum | Software & AI Engineer',
    description: SITE_DESCRIPTION,
    images: [PORTRAIT_PATH],
    creator: '@cyphex_0',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: colors.bg.primary,
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#050505] text-white selection:bg-[#FF5C00] selection:text-white" suppressHydrationWarning>
        <div className="noise-overlay" />
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}

