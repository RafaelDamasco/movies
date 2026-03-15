import { Search } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";

export function SearchInput() {
  return (
    <InputGroup className="max-w-sm">
      <InputGroupInput placeholder="Buscar filmes..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
    </InputGroup>
  );
}
