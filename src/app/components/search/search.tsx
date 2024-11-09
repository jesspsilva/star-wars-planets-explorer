import { CrossCircledIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import * as Styled from "./search.styles";

type SearchProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export default function Search({ value, placeholder, onChange }: SearchProps) {
  const handleInputChange = (value: string) => {
    onChange(value);
  };

  return (
    <Styled.Search className="group">
      <input
        type="text"
        value={value}
        onChange={(e) => handleInputChange(e.target.value)}
        name="search"
        placeholder={placeholder}
        data-testid="search-input"
      />
      <CrossCircledIcon
        width={20}
        height={20}
        className="hidden group-hover:block cursor-pointer"
        onClick={() => handleInputChange("")}
        data-testid="search-input-clear-button"
      />
      <MagnifyingGlassIcon
        width={20}
        height={20}
        className="group-hover:hidden cursor-pointer"
        onClick={() => handleInputChange("")}
      />
    </Styled.Search>
  );
}
