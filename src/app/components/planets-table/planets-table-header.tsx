import ColumnToggle, {
  ColumnToggleConfig,
} from "../column-toggle/column-toggle";
import Search from "../search/search";

interface PlanetsTableHeader {
  searchValue: string;
  columns: ColumnToggleConfig[];
  onSearchChange: (value: string) => void;
  onColumnToggle: (columnKey: string) => void;
}

export default function PlanetsTableHeader({
  searchValue,
  columns,
  onSearchChange,
  onColumnToggle,
}: PlanetsTableHeader) {
  return (
    <header className="mb-8 flex lg:justify-between lg:flex-row flex-col gap-4">
      <div className="mb-2 lg:mb-0">
        <h2 className="font-bold">🌌 Star Wars Planets Explorer</h2>
        <p>Discover and explore planets from across the Star Wars galaxy.</p>
      </div>
      <div className="flex flex-row gap-4 items-center sm:flex-row flex-col">
        <Search
          value={searchValue}
          onChange={onSearchChange}
          placeholder="Search for a planet"
        />
        <ColumnToggle columns={columns} onColumnToggle={onColumnToggle} />
      </div>
    </header>
  );
}
