import { buildProps } from "@ui/utils/build-props";
import { ExtractPropTypes, PropType } from "vue";

export const imageProps = buildProps({
  src: [String],
  fit: {
    type: String as PropType<
      "fill" | "contain" | "cover" | "none" | "scale-down"
    >
  },
  hideonClickModal: [Boolean],
  loading: {
    type: String as PropType<"eager" | "lazy">
  },
  lazy: [Boolean],
  alt: [String],
  zIndex: [Number], 
  initialIndex: [Number],
  closeOnPressEscape: [Boolean],
  referrerPolicy: [String],
  previewSrcList: {
    type: Array as PropType<string[]>,
    default: () => []
  },
  scrollContainer: [String]
});

export type ImageProps = ExtractPropTypes<typeof imageProps>;
