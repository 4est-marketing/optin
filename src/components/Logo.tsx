import Image from "next/image";
import Link from "next/link";

export default function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  const textColor = variant === "dark" ? "text-brand-purple" : "text-white";
  const suffixColor =
    variant === "dark" ? "text-brand-green" : "text-brand-green";

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group ${className}`}
      aria-label="Optin — página inicial"
    >
      <Image
        src="/images/optin-icon.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 sm:h-10 sm:w-10"
        priority
      />
      <span className={`font-display text-2xl sm:text-[1.75rem] leading-none ${textColor}`}>
        opt<span className={suffixColor}>in</span>
        <span className="text-brand-gray text-base align-top ml-0.5">.promo</span>
      </span>
    </Link>
  );
}
