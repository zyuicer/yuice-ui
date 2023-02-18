import type { ExtractPropTypes, PropType } from "vue";
import { buildProps } from "../../../utils/buildProps";
import { isNumberEvery } from "@ui/utils/verifyType";
export const carouselProps = buildProps({
  interval: {
    type: Number,
    default: 3000
  },
  height: {
    type: String,
    default: "200px"
  },
  direction: {
    type: String as PropType<"horizontal" | "vertical">,
    default: "horizontal"
  },
  arrow: {
    type: String as PropType<"always" | "hover" | "never">,
    default: "hover"
  },
  indicatorPosition: {
    type: String as PropType<"outside" | "none">
  },
  loop: {
    type: Boolean,
    default: true
  },
  pauseOnHover: {
    type: Boolean,
    default: true
  },
  initialIndex: {
    type: Number,
    default: 0
  },
  type: {
    type: String as PropType<"card">
  }
});
export const carouselEmits = {
  change: (num: number, pre: number) => [num, pre].every(isNumberEvery)
};
export type CarouselPropsType = ExtractPropTypes<typeof carouselProps>;
export type CarouselEmitsType = typeof carouselEmits;
export const COMPONENT_NAME = "YuCarousel";
