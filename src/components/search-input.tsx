import { Search } from "lucide-react";
import { useState } from "react";
import { useNavigate, useSearch } from "@tanstack/react-router";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function SearchInput() {
  const { query } = useSearch({ from: '/_app' })
  const [searchQuery, setSearchQuery] = useState(query || "");
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
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
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
