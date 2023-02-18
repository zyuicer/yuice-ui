import { SetupContext, computed } from "vue";
import { SwitchProps } from "./switch";
import { SwitchEmits } from "./switch";
export const useSwitch = (
  props: SwitchProps,
  emit: SetupContext<SwitchEmits>["emit"]
) => {
  const handleUpdateSwitchChange = () => {
    emit("update:modelValue", !props.modelValue);
  };
  console.log(props.modelValue);
  const switchActiveClass = computed(() =>
    props.modelValue ? "yu-switch__core__active" : undefined
  );
  const switchActionClass = computed(() =>
    props.modelValue ? "yu-switch__on" : "yu-switch__off"
  );
  return {
    switchActiveClass,
    switchActionClass,
    handleUpdateSwitchChange
  };
};
