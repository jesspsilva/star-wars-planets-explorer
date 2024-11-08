import { QuestionMarkCircledIcon as DefaultIcon } from "@radix-ui/react-icons";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";

type iconWithTooltipProps = {
  Icon?: React.ElementType;
  tooltipText: string;
};

export default function iconWithTooltip({
  Icon = DefaultIcon,
  tooltipText,
}: iconWithTooltipProps) {
  return (
    <TooltipProvider >
      <Tooltip>
        <TooltipTrigger asChild>
          <Icon width={22} height={22} data-testid="tooltip-icon"/>
        </TooltipTrigger>
        <TooltipContent>
          <p>{tooltipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
