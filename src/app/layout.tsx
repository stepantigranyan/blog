import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Wrapper from '@/components/shared/Wrapper';
import Header from '@/components/shared/Header';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: {
        template: '%s | Blog',
        default: 'Blog',
    },

    openGraph: {
        type: 'website',
        siteName: 'Blog',
        title: 'Blog',
        description: 'Blog Website',
    }
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
        <head>
            <title>Blog</title>
        </head>
        <body className={`${geistSans.className}`}>
                <header className="absolute top-0 left-0 w-full shadow-sm">
                    <Wrapper>
                        <Header />
                    </Wrapper>
                </header>
                <div className="mt-20">
                    <Wrapper>{children}</Wrapper>
                </div>
            </body>
        </html>
    );
}
