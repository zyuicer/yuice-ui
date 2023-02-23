import { buildProps } from "@ui/utils/buildProps";
import { ExtractPropTypes } from "vue";

export const iconProps = buildProps({
  color: [String],
  size: [Number, String],
  width: [Number, String],
  height: [Number, String]
});

export type IconProps = ExtractPropTypes<typeof iconProps>;
