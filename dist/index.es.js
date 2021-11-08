import { defineComponent, onMounted, reactive, openBlock, createBlock, Transition, withCtx, createElementBlock, createElementVNode, withModifiers, toDisplayString, Fragment, renderList, createCommentVNode } from "vue";
function mitt(all) {
  all = all || new Map();
  return {
    all,
    on(type, handler) {
      const handlers = all.get(type);
      if (handlers) {
        handlers.push(handler);
      } else {
        all.set(type, [handler]);
      }
    },
    off(type, handler) {
      const handlers = all.get(type);
      if (handlers) {
        if (handler) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        } else {
          all.set(type, []);
        }
      }
    },
    emit(type, evt) {
      let handlers = all.get(type);
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(evt);
        });
      }
      handlers = all.get("*");
      if (handlers) {
        handlers.slice().map((handler) => {
          handler(type, evt);
        });
      }
    }
  };
}
const emitter = mitt();
var dialog_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  for (const [key, val] of props) {
    sfc[key] = val;
  }
  return sfc;
};
const _sfc_main = defineComponent({
  name: "Component",
  setup() {
    onMounted(() => {
      emitter.on("add", addItem);
      emitter.on("close", closeItem);
    });
    const dialogOption = reactive({
      open: false,
      title: "",
      text: "",
      buttons: []
    });
    const addItem = (event) => {
      dialogOption.open = true;
      dialogOption.title = event.title;
      dialogOption.text = event.text;
      dialogOption.buttons = event.buttons;
    };
    const closeItem = () => {
      dialogOption.open = false;
    };
    const click = (button) => {
      if (button && typeof button.handler === "function") {
        button.handler();
      } else {
        dialogOption.open = false;
      }
    };
    return {
      dialogOption,
      closeItem,
      click
    };
  }
});
const _hoisted_1 = {
  key: 0,
  class: "v--modal-overlay"
};
const _hoisted_2 = { class: "v--modal" };
const _hoisted_3 = { class: "v--modal-content" };
const _hoisted_4 = { class: "title" };
const _hoisted_5 = { class: "text" };
const _hoisted_6 = {
  key: 0,
  class: "v--modal-button"
};
const _hoisted_7 = ["onClick"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, { name: "fade" }, {
    default: withCtx(() => [
      _ctx.dialogOption.open ? (openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", {
          class: "v--modal-background-click",
          onMousedown: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.closeItem && _ctx.closeItem(...args), ["self"])),
          onTouchstart: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.closeItem && _ctx.closeItem(...args), ["self"]))
        }, [
          createElementVNode("div", _hoisted_2, [
            createElementVNode("div", _hoisted_3, [
              createElementVNode("h3", _hoisted_4, toDisplayString(_ctx.dialogOption.title), 1),
              createElementVNode("p", _hoisted_5, toDisplayString(_ctx.dialogOption.text), 1)
            ]),
            _ctx.dialogOption.buttons ? (openBlock(), createElementBlock("div", _hoisted_6, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.dialogOption.buttons, (button) => {
                return openBlock(), createElementBlock("button", {
                  class: "button",
                  type: "button",
                  key: button.title,
                  onClick: withModifiers(($event) => _ctx.click(button), ["stop"])
                }, toDisplayString(button.title), 9, _hoisted_7);
              }), 128))
            ])) : createCommentVNode("", true)
          ])
        ], 32)
      ])) : createCommentVNode("", true)
    ]),
    _: 1
  });
}
var Dialog = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var index = {
  install: (app) => {
    const dialogs = (params) => {
      emitter.emit("add", params);
    };
    dialogs.close = () => {
      emitter.emit("close");
    };
    app.provide("simple-dialog", dialogs);
    app.component("Dialog", Dialog);
  }
};
export { index as default };
