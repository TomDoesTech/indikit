import "~/styles/globals.css";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Toaster } from "~/components/ui/toaster";
import { env } from "~/env";
import { ComingSoon } from "./_components/ComingSoon";
import en from "../../messages/en.json";

export const metadata: Metadata = {
  title: en.site.title,
  description: en.site.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <TRPCReactProvider>
            {env.COMING_SOON_MODE ? (
              <ComingSoon />
            ) : (
              <div className="flex min-h-full flex-col">
                <Navbar />
                <main className="min-h-full flex-1 py-8">{children}</main>
                <Toaster />
                <Footer />
              </div>
            )}
          </TRPCReactProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
