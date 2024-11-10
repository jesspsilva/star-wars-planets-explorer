import { Cross2Icon } from "@radix-ui/react-icons";

import { IPlanets } from "@/app/types/planets";
import { formatPlanetDetails } from "@/app/utils/format-planet-details";
import { planetDetailsConfig } from "@/app/utils/planet-details-config";

import * as Styled from "./modal.styles";

type ModalProps = {
  planet: IPlanets;
  onClose: () => void;
};

export default function Modal({ planet, onClose }: ModalProps) {
  const fieldsToShow = planetDetailsConfig
    .filter((config) => config.key !== "name")
    .map((config) => ({
      ...config,
      label: config.label,
    }));

  return (
    <Styled.Backdrop onClick={onClose} role="dialog">
      <Styled.ModalContainer onClick={(e) => e.stopPropagation()}>
        <Styled.Header>
          <Styled.Title>{planet.name}</Styled.Title>
          <Styled.CloseButton
            onClick={onClose}
            data-testid="modal-close-button"
          >
            <Cross2Icon width={24} height={24} />
          </Styled.CloseButton>
        </Styled.Header>

        <Styled.ContentGrid>
          {fieldsToShow.map((config) => (
            <div
              key={config.label}
              data-label={config.label}
              className="flex items-center gap-1"
              data-testid={`field-${config.key}`}
            >
              <label className="font-bold">{config.label}: </label>
              {formatPlanetDetails(
                planet[config.key as keyof IPlanets] as string,
                config.key
              )}
            </div>
          ))}
        </Styled.ContentGrid>
      </Styled.ModalContainer>
    </Styled.Backdrop>
  );
}
