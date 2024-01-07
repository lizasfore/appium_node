// test.e2e.ts
// import { By, until, WebDriver } from "appium-webdriver";
import { expect, browser } from "@wdio/globals";
import Page from "../pageobjects/page.js";

const myPage = new Page();

describe("My calculator application", () => {
  it("should divide numbers properly", async () => {
    await myPage.clickElement(myPage.btn7);
    await myPage.clickElement(myPage.btnDiv);
    await myPage.clickElement(myPage.btn5);
    await myPage.clickElement(myPage.btnEq);
    expect(await myPage.getElementText(myPage.result)).toEqual("1.4");
    await myPage.clickElement(myPage.btnClr);
  });

  it("should multiply numbers", async () => {
    await myPage.clickElement(myPage.btn8);
    await myPage.clickElement(myPage.btnMult);
    await myPage.clickElement(myPage.btn4);
    await myPage.clickElement(myPage.btnEq);
    expect(await myPage.getElementText(myPage.result)).toEqual("32");
    await myPage.clickElement(myPage.btnClr);
  });

  it("should extract root from numbers", async () => {
    await myPage.clickElement(myPage.btnRoot);
    await myPage.clickElement(myPage.btn9);
    await myPage.clickElement(myPage.btnEq);
    expect(await myPage.getElementText(myPage.result)).toEqual("3");
    await myPage.clickElement(myPage.btnClr);
  });

  it("should calculate correct factorial", async () => {
    await myPage.clickElement(myPage.btn3);
    await myPage.clickElement(myPage.btnFact);
    await myPage.clickElement(myPage.btnEq);
    expect(await myPage.getElementText(myPage.result)).toEqual("6");
    await myPage.clickElement(myPage.btnClr);
  });

  it("should subtract numbers correctly", async () => {
    await myPage.clickElement(myPage.btn8);
    await myPage.clickElement(myPage.btnSub);
    await myPage.clickElement(myPage.btn8);
    await myPage.clickElement(myPage.btnEq);
    expect(await myPage.getElementText(myPage.result)).toEqual("0");
  });
});

// import { By, until, WebDriver } from "appium-webdriver";
// import { expect, browser } from "@wdio/globals";
// import Page from "../pageobjects/page.js";
// const myPage = new Page();

// describe("My Login application", () => {
//   it("should sign up with valid credentials", async () => {
//     const btn7 = WebDriver.findElement(
//       By.id("com.google.android.calculator:id/digit_7")
//     );
//     const btnDiv = WebDriver.findElement(
//       By.id("com.google.android.calculator:id/op_div")
//     );
//     const btn5 = WebDriver.findElement(
//       By.id("com.google.android.calculator:id/digit_5")
//     );
//     // await browser.pause(5000);
//     await myPage.clickElement(btn7);
//     await myPage.clickElement(btnDiv);
//     await myPage.clickElement(btn5);
//     // expect(await entry.isSignUpButtonDisplayed(signUpBtnIos)).true;
//     // expect(await entry.getSignUpButtonText(signUpBtnIos)).toEqual("Sign up"); // element has no text
//     // await entry.clickSignUpButton(signUpBtnIos);
//     await browser.pause(5000);
//   });
// });

// =========================
