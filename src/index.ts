import { App } from 'vue';
import Dialog from "./components/dialog.vue";
import emitter from "./mitt";

export interface DialogOptions {
  title?: string;
  text?: string;
  buttons?: Array<void>;
}

export const dialogs = (params: DialogOptions): void => {
  emitter.emit("add", params);
}
dialogs.close = () => {
  emitter.emit("close");
};

export default {
  install: (app: App) => {
    app.config.globalProperties.$dialogs = dialogs;
    app.component("Dialog", Dialog);
  }
}