import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.reactCapacitor',
  appName: 'react-with-capacitor',
  webDir: 'build',
  "bundledWebRuntime": false,
  "server": {
    //"url": "http://192.168.1.9:3002",
    "url": "http://localhost:3002",
    "cleartext": true
  }
};

export default config;
