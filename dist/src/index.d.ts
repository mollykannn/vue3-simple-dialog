import { App } from 'vue';
export interface DialogOptions {
    title?: string;
    text?: string;
    buttons?: Array<object>;
}
declare const _default: {
    install: (app: App) => void;
};
export default _default;
