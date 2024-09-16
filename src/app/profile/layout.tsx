import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { site } from "~/shared/strings";
import { api } from "~/trpc/server";

export const runtime = "edge";

export const metadata: Metadata = {
  title: `${site.profile.title} | ${site.title}`,
  description: site.profile.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await api.auth.user();

  if (!user) {
    return redirect("/auth/login");
  }

  return children;
}
