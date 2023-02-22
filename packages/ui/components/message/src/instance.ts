import { shallowReactive } from "vue";
import { MessageContext } from "./message";

export const instances = shallowReactive<MessageContext[]>([]);

export function getInstance(id: string) {
  const idx = instances.findIndex(i => i.id === id);
  const current = instances[idx];
  let pre: MessageContext | undefined;

  if (idx > 0) {
    pre = instances[idx - 1];
  }
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

export const getOffsetOrSpace = (id: string, offset: number) => {
  const idx = instances.findIndex(i => i.id === id);
  return idx > 0 ? 20 : offset;
};
