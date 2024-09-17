import { type Metadata } from "next";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";
import { site } from "../../../messages/en.json";

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
