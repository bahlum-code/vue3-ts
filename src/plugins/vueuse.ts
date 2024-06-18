import { App } from 'vue';
import { useMouse, useDark, useToggle } from '@vueuse/core';

export default {
  install(app: App) {
    app.config.globalProperties.$vueuse = {
      useMouse,
      useDark,
      useToggle
    };
  }
};