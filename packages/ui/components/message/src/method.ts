import { createVNode, isVNode, render } from "vue";
import { isString, isFunction } from "@ui/utils/verifyType";
import { messageDefault } from "./message";
import MessageConstructor from "./index.vue";
import type { MessageOptions, MessageParams } from "./message";

function normalizeOptions(params?: MessageParams) {
  const options: MessageOptions =
    !params || isString(params) || isVNode(params) || isFunction(params)
      ? { message: params as MessageOptions["message"] }
      : (params as MessageOptions);
  const normalized: MessageOptions = {
    ...messageDefault,
    ...options
  };
  if (!normalized.appendTo) {
    normalized.appendTo = document.body;
  }
  return normalized;
}

const createMessage = ({ appendTo, ...options }: MessageOptions) => {
  // TODO
  const container = document.createElement("div");
  const node = createVNode(MessageConstructor);
  render(node, container);
  (appendTo as HTMLElement).appendChild(container.firstElementChild!);
  const vm = node.component!;
  const handler = {
    close() {
      vm.exposed!.visiable.value = false;
    }
  };
  const instance = {
    handler
  };
  return instance;
};

const message = (options: MessageParams) => {
  const normalized = normalizeOptions(options);
  const instance = createMessage(normalized);
  return instance;
};

export default message;
