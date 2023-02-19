import { CSSProperties, SetupContext, computed } from "vue";
import { COMPONENT_NAME, SwitchProps } from "./switch";
import { SwitchEmits } from "./switch";
import { changeComponentSize } from "@ui/utils/changeCompnentSize";
import { convertStringToNumber } from "@ui/utils/convertNumbeWithString";
export const useSwitch = (
  props: SwitchProps,
  emit: SetupContext<SwitchEmits>["emit"]
) => {
  // 是否为选中状态
  const switchActiveClass = computed(() =>
    props.modelValue ? "yu-switch__core__active" : undefined
  );

  // size
  const switchSizeStyle = changeComponentSize("switch", props.size);
  // lineStyle
  const switchLineStyle = computed((): CSSProperties | undefined => {
    if (props.width) {
      return {
        width: convertStringToNumber(props.width, "px")
      };
    }
    return undefined;
  });
  // 是否禁止点击
  const switchDisabledClass = computed(() =>
    props.disabled ? "yu-switch-is-disabled" : undefined
  );

  // 打开关闭 class
  const switchActionClass = computed(() =>
    props.modelValue ? "yu-switch__on" : "yu-switch__off"
  );
  // inner text
  const innerText = computed(() => {
    return props.modelValue ? props.activeText : props.inactiveText;
  });

  // 点击切换事件
  const handleUpdateSwitchChange = () => {
    if (switchDisabledClass.value) return;
    emit("update:modelValue", !props.modelValue);
  };
  return {
    switchActiveClass,
    switchActionClass,
    switchSizeStyle,
    switchDisabledClass,
    innerText,
    switchLineStyle,
    handleUpdateSwitchChange
  };
};
