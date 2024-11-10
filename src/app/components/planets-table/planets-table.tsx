import { useCallback, useState } from "react";

import Modal from "@/app/components/modal/modal";
import Table from "@/app/components/table/table";
import { IPlanets } from "@/app/types/planets";

interface PlanetsTableProps {
  planets: IPlanets[];
  isLoading: boolean;
  columns: { key: string; name: string }[];
  onClearSearch: () => void;
}

export default function PlanetsTable({
  planets,
  isLoading,
  columns,
  onClearSearch,
}: PlanetsTableProps) {
  const [isDetailsModalVisible, setIsDetailsModalVisible] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<null | IPlanets>(null);

  const handleRowClick = useCallback((planet: IPlanets) => {
    setSelectedPlanet(planet);
    setIsDetailsModalVisible(true);
  }, []);

  return (
    <>
      <section>
        <Table
          data={planets}
          onRowClick={handleRowClick}
          onClearClick={onClearSearch}
          isLoading={isLoading}
          columns={columns}
        />
      </section>

      {isDetailsModalVisible && selectedPlanet && (
        <Modal
          planet={selectedPlanet}
          onClose={() => setIsDetailsModalVisible(false)}
        />
      )}
    </>
  );
}
