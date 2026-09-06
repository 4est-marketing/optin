import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-5 text-center sm:flex-row sm:justify-between sm:text-left sm:px-8">
        <Logo />
        <p className="text-sm text-brand-ink/50">
          © {new Date().getFullYear()} Optin. Marketing como escuta.
        </p>
        <a
          href="mailto:contato@optin.promo"
          className="text-sm font-medium text-brand-purple hover:text-brand-purple-dark"
        >
          contato@optin.promo
        </a>
      </div>
    </footer>
  );
}
