import { provide } from "vue";
import { ICON_PROPS_PROVIDE_KEY } from "shared/constant";
import { IconProps } from "./icon";
export const COMPONENT_NAME = "YuIcon";

export const useIcon = (props: IconProps) => {
  provide(ICON_PROPS_PROVIDE_KEY, props);
};
