import "~/styles/globals.css";
import dynamic from "next/dynamic";
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
import { PHProvider } from "./_components/Providers";
import { api } from "~/trpc/server";

const PostHogPageView = dynamic(() => import("./_components/PostHogPageView"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: en.site.title,
  description: en.site.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();

  const user = await api.auth.user();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale} className={`${GeistSans.variable}`}>
      <PHProvider>
        <body>
          <NextIntlClientProvider messages={messages}>
            <TRPCReactProvider>
              {env.NEXT_PUBLIC_COMING_SOON_MODE ? (
                <ComingSoon />
              ) : (
                <div className="flex min-h-full flex-col">
                  <Navbar initialUser={user} />
                  <main className="min-h-full flex-1 py-8">{children}</main>
                  <Toaster />
                  <Footer />
                </div>
              )}

              <PostHogPageView />
            </TRPCReactProvider>
          </NextIntlClientProvider>
        </body>
      </PHProvider>
    </html>
  );
}
