import {
  CSSProperties,
  computed,
  defineComponent,
  effectScope,
  onUnmounted
} from "vue";
import { snakeKeyConversion } from "../../../utils/keyConversion";
const container = defineComponent({
  name: "YuContainer",
  props: {
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props, { slots }) {
    const keyList: string[] = [];
    const scope = effectScope(true);
    const yuDirection = scope.run(() => {
      if (slots.default) {
        const components: any = slots.default();
        for (const component of components) {
          const type = component.type.name
            ? component.type.name
            : component.type;
          if (snakeKeyConversion(type) === "YuHeader") {
            keyList.push("YuHeader");
          } else if (snakeKeyConversion(type) === "YuFooter") {
            keyList.push("YuFooter");
          }
        }

        if (keyList.length !== 0) {
          return "vertical";
        } else {
          return props.direction;
        }
      } else {
        return props.direction;
      }
    });
    onUnmounted(() => {
      scope.stop();
    });
    const lineStyle = computed((): CSSProperties => {
      return {
        flexDirection: yuDirection === "vertical" ? "column" : "row"
      };
    });

    return () => (
      <div class="yu-container" style={lineStyle.value}>
        {slots.default && slots.default()}
      </div>
    );
  }
});

export default container;
