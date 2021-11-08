<template>
  <transition name="fade">
    <div class="v--modal-overlay" v-if="dialogOption.open">
      <div
        class="v--modal-background-click"
        @mousedown.self="closeItem"
        @touchstart.self="closeItem"
      >
        <div class="v--modal">
          <div class="v--modal-content">
            <h3 class="title">{{ dialogOption.title }}</h3>
            <p class="text">{{ dialogOption.text }}</p>
          </div>
          <div class="v--modal-button" v-if="dialogOption.buttons">
            <button
              v-for="button in dialogOption.buttons"
              class="button"
              type="button"
              :key="button.title"
              @click.stop="click(button)"
            >
              {{ button.title }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.v--modal-overlay {
  position: fixed;
  box-sizing: border-box;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  z-index: 999;
}

.v--modal-overlay .v--modal-background-click {
  width: 100%;
  min-height: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.v--modal-overlay .v--modal {
  background-color: white;
  text-align: left;
  border-radius: 3px;
  box-shadow: 0 20px 60px -2px rgba(27, 33, 58, 0.4);
  padding: 0;
  min-width: 400px;
  height: auto;
}

.v--modal-overlay .v--modal .v--modal-content {
  padding: 1em 1em 0 1em;
}

.v--modal-overlay .v--modal .v--modal-content .title {
  margin: 0;
  padding: 0;
}

.v--modal-overlay .v--modal .v--modal-content .text {
  text-align: center;
}

.v--modal-overlay .v--modal .v--modal-button {
  display: flex;
  flex: 0 1 auto;
  border-top: 1px solid #eee;
}

.v--modal-overlay .v--modal .v--modal-button .button {
  background: transparent;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  box-sizing: border-box;
  line-height: 40px;
  height: 40px;
  outline: none;
  font-size: 0.9em;
  flex: 1;
  color: #6e6e6e;
}

.v--modal-overlay .v--modal .v--modal-button .button:not(:first-of-type) {
  border-left: 1px solid #eee;
}
</style>
<script lang="ts">
import { defineComponent, reactive, onMounted } from "vue";
import emitter from "./../mitt";

export default defineComponent({
  name: 'Component',
  setup() {
    onMounted(() => {
      emitter.on("add", addItem);
      emitter.on("close", closeItem);
    });

    const dialogOption = reactive({
      open: false,
      title: "",
      text: "",
      buttons: [] as any,
    });

    const addItem = (event: any) => {
      dialogOption.open = true;
      dialogOption.title = event.title;
      dialogOption.text = event.text;
      dialogOption.buttons = event.buttons;
    };

    const closeItem = () => {
      dialogOption.open = false;
    };
    
    const click = (button: any) => {
      if (button && typeof button.handler === "function") {
        button.handler();
      } else {
        dialogOption.open = false;
      }
    };

    return {
      dialogOption,
      closeItem,
      click,
    };
  },
});
</script>