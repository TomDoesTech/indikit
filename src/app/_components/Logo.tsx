import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <span className="inline bg-gradient-to-r from-[#e09ef2] to-[#eb03cc] bg-clip-text font-bold text-transparent">
        LOGO
      </span>
    </Link>
  );
}
