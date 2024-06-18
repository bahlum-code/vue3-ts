import { App } from 'vue';
import { format, formatDistance, formatRelative, subDays } from 'date-fns';

export default {
  install(app: App) {
    app.config.globalProperties.$dateFns = {
      format,
      formatDistance,
      formatRelative,
      subDays
    };
  }
};