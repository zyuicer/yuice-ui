import { buildProps } from "@ui/utils/buildProps";
import { Mutable, mutable } from "@ui/utils/typescript";
import { definePropType } from "@ui/utils/vue/props/runtime";
import { ExtractPropTypes, VNode } from "vue";

export const messageBoxDefault = mutable({
  autofocus: true,
  appendTo: document.body ?? undefined,
  message: "",
  showConfirmButton: false
});

export const messageBoxProps = buildProps({
  title: [String],
  message: {
    type: definePropType<string | VNode | (() => VNode)>([
      Function,
      String,
      Object
    ]),
    default: messageBoxDefault.message
  },
  autofocus: {
    type: Boolean,
    default: messageBoxDefault.autofocus
  },
  showConfirmButton: {
    type: Boolean,
    default: messageBoxDefault.showConfirmButton
  }
});

export type MessageBoxProps = ExtractPropTypes<typeof messageBoxProps>;

export type MessageBoxOptions = Partial<
  Mutable<MessageBoxProps> & {
    appentTo: HTMLElement | string;
  }
>;

export type MessageParams = MessageBoxOptions;
