import { config as sharedConfig } from "./wdio.conf.ts";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file
export const config = {
    ...sharedConfig,
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S20 Plus',
      platformVersion: '10.0',
      platformName: 'android'
        }
      }],
    services: [
        [
          'browserstack',
          {
            app: 'bs://f85b297283b2f26f1df918ed5637982fb6a72aee',
            buildIdentifier: "${BUILD_NUMBER}",
            // opts: { forcelocal: false, localIdentifier: "webdriverio-appium-app-browserstack-repo" },
            browserstackLocal: true,
            testObservability: true,
            testObservabilityOptions: { 
                  projectName: "BrowserStack Android app testing",
                  buildName: 'browserstack Android build',
              },
            debug: true,
            networkLogs: true,
            consoleLogs: "warn"
          },
        ]
      ],
}
