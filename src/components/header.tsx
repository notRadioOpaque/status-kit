import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="max-w-8xl mx-auto flex w-full items-center justify-between">
      <Logo />

      <ThemeToggle />
    </header>
  );
};

export default Header;
