import type { VNodeChild, ComponentInternalInstance } from "vue";
import { shallowRef } from "vue";

export const useOrderedChildren = <T extends { uid: number }>(
  vm: ComponentInternalInstance,
  childrenCompnentName: string
) => {
  // todo
  const children: Record<number, T> = {};
  const orderChildren = shallowRef<T[]>([]);

  const addChildren = (child: T) => {
    children[child.uid] = child;
  };
  const removeChildren = (uid: number) => {
    delete children[uid];
    orderChildren.value = orderChildren.value.filter(
      child => child.uid !== uid
    );
  };
  return {
    children: orderChildren,
    addChildren
  };
};
