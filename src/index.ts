
import { App } from 'vue';
import emitter from "./mitt";
import Dialog from "./components/dialog.vue";

export interface DialogOptions {
  title?: string;
  text?: string;
  buttons?: Array<object>;
}

export default {
  install: (app: App) => {
    const dialogs = (params: DialogOptions | string): void  => {
      emitter.emit("add", params);
    };
    dialogs.close = () => {
      emitter.emit("close");
    };
    app.provide('simple-dialog', dialogs)
    app.component("Dialog", Dialog);
  }
}