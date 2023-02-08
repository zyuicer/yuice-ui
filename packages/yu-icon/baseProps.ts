import { ICON_PROPS_PROVIDE_KEY } from "shared/constant";
import { inject } from "vue";

export const useIconProps = () => {
  const props = inject(ICON_PROPS_PROVIDE_KEY) as {
    size: string | number;
    color: string;
  };
  return props;
};
