import { YuSizeOptions } from "@ui/types/base.type";
import { buildProps } from "@ui/utils/buildProps";
import { ExtractPropTypes, PropType } from "vue";

export const switchProps = buildProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inlinePrompt: {
    type: Boolean,
    default: false
  },
  activeText: [String],
  inactiveText: [String],
  size: {
    type: String as PropType<YuSizeOptions>,
    default: "default"
  },
  disable: [Boolean],
  width: [Number, String]
});
export const switchEmits = {
  "update:modelValue"(changeValue: boolean) {
    return changeValue;
  }
};

export const COMPONENT_NAME = "YuSwitch";
export type SwitchEmits = typeof switchEmits;
export type SwitchProps = ExtractPropTypes<typeof switchProps>;
