import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { ChangeEvent } from "react";

import * as Styled from "./search.styles";


type SearchProps = {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
};

export default function Search({ value, placeholder, onChange }: SearchProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <Styled.Search>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        name="search"
        placeholder={placeholder}
      />
      <MagnifyingGlassIcon width={20} height={20}/>
    </Styled.Search>
  );
}
