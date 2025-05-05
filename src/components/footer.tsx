export default function Footer() {
  return (
    <footer className="row-start-3 flex flex-wrap items-center justify-center gap-2">
      Built with
      <a
        className="flex items-center gap-2 font-bold hover:underline hover:underline-offset-4"
        href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Nextjs
      </a>
      by
      <a
        className="flex items-center gap-2 font-bold text-[#1e88e5] hover:underline hover:underline-offset-4"
        href="https://heyismail.xyz"
        rel="noopener noreferrer"
        target="_blank"
      >
        this guy
      </a>
    </footer>
  );
}
