import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <span className="flex items-center gap-1">
        <Image src="/favicon.ico" alt="IndiKit" width={20} height={20} />
        <span className="inline bg-gradient-to-r from-red-500 via-green-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
          IndiKit
        </span>
      </span>
    </Link>
  );
}
