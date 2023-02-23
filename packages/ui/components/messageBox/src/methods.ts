import { MessageOptions } from "@ui/components/message/src/message";
import MessageBoxConstructor from "./index.vue";
import { MessageParams, messageBoxDefault } from "./messageBox";
import { createVNode, render } from "vue";
import YuShade from "@ui/components/shade";

function normalizedOptions(options: MessageParams) {
  const props = {
    ...messageBoxDefault,
    ...options
  };
  return props;
}

function createMessageBox({ appendTo, ...options }: MessageOptions) {
  const container = document.createElement("div");
  const messageBoxInstance = createVNode(MessageBoxConstructor, options);
  const shadeVNode = createVNode(
    YuShade,
    {},
    {
      default() {
        return messageBoxInstance;
      }
    }
  );
  render(shadeVNode, container);
  console.log(appendTo);

  (appendTo as HTMLElement).appendChild(container.firstElementChild!);
  return messageBoxInstance;
}

function MessageBox(props: MessageParams) {
  // todo
  const normalized = normalizedOptions(props);
  const instance = createMessageBox(normalized);
  return instance;
}

export default MessageBox;
