import { Link } from "@tanstack/react-router";

import { Logo } from "./logo";
import { SearchInput } from "./search-input";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between gap-6 border-b px-6">
      <Logo />
      <SearchInput />
      <nav className="flex items-center space-x-4 lg:space-x-6">
        <Link
          to="/"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          activeProps={{
            className: 'font-bold',
          }}
        >
          Favorites
        </Link>
      </nav>
    </header>
  );
}
