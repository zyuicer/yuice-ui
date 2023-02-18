import { buildProps } from "@ui/utils/buildProps";
import { isDark } from "@ui/index";
import { ExtractPropTypes, PropType } from "vue";

export const configProvide = buildProps({
  theme: {
    type: String as PropType<typeof isDark>
  }
});

export type ConfigProvide = ExtractPropTypes<typeof configProvide>;
export const COMPONENT_NAME = "YuConfigProvide";
