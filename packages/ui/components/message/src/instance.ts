import { shallowReactive } from "vue";
import { MessageContext } from "./message";

export const instances = shallowReactive<MessageContext[]>([]);
export function getInstance(id: string) {
  // TODO
  const idx = instances.findIndex(i => i.id === id);
  let pre: MessageContext | undefined;
  if (idx > 0) {
    pre = instances[idx - 1];
  }
  const current = instances[idx];
  return {
    current,
    pre
  };
}
export const getLastOffset = (id: string) => {
  const { pre } = getInstance(id);
  if (!pre) return 0;
  return pre.vm.exposed!.button.value;
};
