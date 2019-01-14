import { loadPluginCss } from 'grafana/app/plugins/sdk';

// register Remote Solution Services
import './services/projTaqniaAppSrv';

import { AppConfigCtrl } from './app-config/config';

const appId = "thingspin-opc-channel-app";
loadPluginCss({
  dark: `plugins/${appId}/css/app.dark.css`,
  light: `plugins/${appId}/css/app.light.css`
});

export {
  AppConfigCtrl as ConfigCtrl,
};
