import { createVNode, isVNode, render } from "vue";
import { isString, isFunction } from "@ui/utils/verifyType";
import { MessageHandler, MessageProps, messageDefault } from "./message";
import MessageConstructor from "./index.vue";
import { instances } from "./instance";
import type { MessageOptions, MessageParams, MessageContext } from "./message";

let seed = 1;
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
  const id = `message_${seed++}`;
  const container = document.createElement("div");
  const onUserClose = options.onClose;
  const props = {
    ...options,
    id,
    onClose() {
      onUserClose?.();
      closeMessage(instance);
    }
  };
  const node = createVNode(
    MessageConstructor,
    props,
    isFunction(props.message) || isVNode(props.message)
      ? {
          default: isFunction(props.message)
            ? props.message
            : () => props.message
        }
      : null
  );
  render(node, container);
  (appendTo as HTMLElement).appendChild(container.firstElementChild!);
  const vm = node.component!;
  const handler: MessageHandler = {
    close() {
      vm.exposed!.visiable.value = false;
    }
  };
  const instance: MessageContext = {
    handler,
    id: "",
    vnode: node,
    vm
  };
  instances.push(instance);
  return instance;
};

const message = (options: MessageParams) => {
  const normalized = normalizeOptions(options);
  const instance = createMessage(normalized);
  return instance;
};
function closeMessage(instance: MessageContext) {
  const idx = instances.indexOf(instance);
  if (idx === -1) return; // 未找到
  instances.splice(idx, 1);
  const { handler } = instance;
  handler.close();
}

export default message;
