# Vue3-simple-dialog

> This is fork from [vue-js-modal](https://github.com/euvl/vue-js-modal). 
> 
> This plugin support vue 3 and only have Dialog function.

## Usage

First register the directive globally:

```js
import Dialog from "vue3-simple-dialog";
import "vue3-simple-dialog/dist/style.css";

const app = createApp(App);
app.use(Dialog);
app.mount("#app");
```

Then use it in template:

```vue
<template>
  <button @click="open()">Open</button>
  <Dialog></Dialog>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { dialogs } from "vue3-simple-dialog";

export default defineComponent({
  setup() {
    const open = () => {
      dialogs({
        title: "title",
        text: "content",
        buttons: [
          {
            title: "Cancel",
          },
          {
            title: "Like",
            handler: () => {
              alert("Like action");
            },
          },
          {
            title: "Repost",
            handler: () => {
              alert("Repost action");
            },
          },
        ],
      });
    };
    return { open }
  }
});
</script>
```

<p align="center">
  <img src="https://media.giphy.com/media/3oKIPco1eNxAA1rD4Q/giphy.gif">
</p>

---

# Sponsorship & support

**If you are using this project please consider sponsoring it's further development & bug fixes**

Links: https://github.com/sponsors/euvl, https://www.buymeacoffee.com/yev

## This library is contributor-driven

**This library is contributor-driven**. It is not backed by any company, which means that all contributions are voluntary and done by the people who need them. If you need something improved, added, or fixed, please contribute it yourself. Please keep in mind that maintainers volunteer their free time to work on this project and have no obligation to reply on the issues, tailor library for specific use-cases or perform customer support.

## Other projects

Check out my other projects:

- https://github.com/euvl/vue-notification
- https://github.com/euvl/vue-js-toggle-button
- https://github.com/euvl/vue-js-popover
- https://github.com/euvl/v-clipboard
