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
    <header className="mb-10 flex justify-end gap-4">
      <Search
        value={searchValue}
        onChange={onSearchChange}
        placeholder="Search for a planet"
      />
      <ColumnToggle columns={columns} onColumnToggle={onColumnToggle} />
    </header>
  );
}
