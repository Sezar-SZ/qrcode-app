import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.sezar.qrcode',
  appName: 'QR Scanner',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
