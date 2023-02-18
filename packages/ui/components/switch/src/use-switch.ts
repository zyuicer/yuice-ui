import { SetupContext, computed } from "vue";
import { COMPONENT_NAME, SwitchProps } from "./switch";
import { SwitchEmits } from "./switch";
import { changeComponentSize } from "@ui/utils/changeCompnentSize";
export const useSwitch = (
  props: SwitchProps,
  emit: SetupContext<SwitchEmits>["emit"]
) => {
  const handleUpdateSwitchChange = () => {
    emit("update:modelValue", !props.modelValue);
  };
  // 是否为选中状态
  const switchActiveClass = computed(() =>
    props.modelValue ? "yu-switch__core__active" : undefined
  );

  // size
  const switchSizeStyle = changeComponentSize("switch", props.size);

  const switchActionClass = computed(() =>
    props.modelValue ? "yu-switch__on" : "yu-switch__off"
  );
  return {
    switchActiveClass,
    switchActionClass,
    switchSizeStyle,
    handleUpdateSwitchChange
  };
};
