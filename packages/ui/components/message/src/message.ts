import { isClient } from "@vueuse/core";
import { buildProps } from "@ui/utils/buildProps";
import { mutable } from "@ui/utils/typescript";
import { definePropType } from "@ui/utils/vue/props/runtime";
import type { YuTypeOptions } from "@ui/types/base.type";
import type { ComponentInternalInstance, ExtractPropTypes, VNode } from "vue";
import type { Mutable } from "@ui/utils/typescript";

export const COMPONENT_NAME = "YuMessage";

export const messageDefault = mutable({
  id: "",
  appendTo: isClient ? document.body : (undefined as never),
  message: "",
  offset: 16,
  duration: 3000
});
export const messageProps = buildProps({
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      String,
      Object,
      Function
    ]),
    default: messageDefault.message
  },
  duration: {
    type: Number,
    default: messageDefault.duration
  },
  id: {
    type: String,
    default: messageDefault.id
  },
  type: {
    type: definePropType<YuTypeOptions>([String]),
    default: "info"
  },
  offset: {
    type: Number,
    default: messageDefault.offset
  },
  onClose: {
    type: definePropType<() => void>([Function]),
    default: () => ({})
  }
});

export type MessageProps = ExtractPropTypes<typeof messageProps>;

export type MessageOptions = Partial<
  Mutable<
    Omit<MessageProps, "id"> & {
      appendTo: HTMLElement | string;
    }
  >
>;

export type MessageParams = MessageOptions | MessageOptions["message"];

export type MessageHandler = {
  close: () => void;
};
export type MessageContext = {
  id: string;
  vm: ComponentInternalInstance;
  vnode: VNode;
  handler: MessageHandler;
  props: MessageOptions;
};
