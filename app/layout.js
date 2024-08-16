import { Baskervville, Lora } from '@next/font/google';
import "tiptypr/dist/styles.css";
import "./globals.css";

const baskerville = Baskervville({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-baskerville',
});

const lora = Lora({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-lora',
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${baskerville.variable} ${lora.variable}`}>{children}</body>
    </html>
  );
}
