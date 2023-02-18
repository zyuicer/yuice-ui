import { buildProps } from "@ui/utils/buildProps";
import { ExtractPropTypes, PropType } from "vue";

export const alertProps = buildProps({
  type: {
    type: String as PropType<"sucess" | "warning" | "error" | "info">,
    default: "info"
  },
  title: [String],
  description: [String],
  closable: [Boolean],
  closeText: [String],
  showIcon: [Boolean],
  effect: {
    type: String as PropType<"light" | "dark">,
    default: "light"
  }
});
export type AlertProps = ExtractPropTypes<typeof alertProps>;
