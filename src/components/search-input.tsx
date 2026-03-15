import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate({
        to: "/search",
        search: {
          query: searchQuery,
        },
      });
      return
    }
    navigate({
      to: "/",
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput
        placeholder="Buscar filmes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
