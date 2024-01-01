import { config as sharedConfig } from "./wdio.conf.ts";
import { join } from "path"
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

export const config = {
    ...sharedConfig,
    port: 4723,
    services: ["appium"],
    appium: {
      // For options see
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
      args: ["--allow-insecure"],
    },
    capabilities: [{
      // capabilities for local Appium web tests on an Android Emulator or Real device
      platformName: 'Android',
      'appium:deviceName': 'R58N21JR9ZA',
      "appium:app": "calculator-7-8-271241277.apk",
      'appium:platformVersion': '13.0',
      'appium:automationName': 'UiAutomator2'
  }],

}
