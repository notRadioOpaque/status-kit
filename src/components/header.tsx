import Logo from "./logo";
import ThemeToggle from "./theme-toggle";

const Header = () => {
  return (
    <header className="flex w-full max-w-7xl items-center justify-between">
      <Logo />

      <ThemeToggle />
    </header>
  );
};

export default Header;
