import {
  ComponentInternalInstance,
  VNode,
  VNodeNormalizedChildren,
  isVNode,
  shallowRef
} from "vue";
import { ref } from "vue";

export const useOrderedChildren = <T extends { uid: number }>(
  vm: ComponentInternalInstance,
  componentName: string
) => {
  const children: Record<number, T> = {};
  const orderedChildren = shallowRef<T[]>([]);
  function getOrderChldren(
    vm: ComponentInternalInstance,
    componentName: string,
    child: Record<number, T>
  ) {
    // TODO:
  }
  function addChildren(child: T) {
    children[child.uid] = child;
    // orderedChildren.value = getOrderChldren(vm, componentName, children);
  }
  function removeChildre() {
    // TODO:
  }
  return {
    children: orderedChildren,
    addCHildren: addChildren,
    removeChildre
  };
};
