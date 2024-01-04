// test.e2e.ts
// import { By, until, WebDriver } from "appium-webdriver";
import { expect, browser } from "@wdio/globals";
import Page from "../pageobjects/page.js";

const myPage = new Page();

describe("My calculator application", () => {
  it("should divide numbers properly", async () => {
    const btn7 = "id=com.google.android.calculator:id/digit_7";
    const btnDiv = "id=com.google.android.calculator:id/op_div";
    const btn5 = "id=com.google.android.calculator:id/digit_5";
    const btnEq = "id=com.google.android.calculator:id/eq";
    const result = "id=com.google.android.calculator:id/result_final";
    const btnClr = "id=com.google.android.calculator:id/clr";

    // await btn7.waitForDisplayed({ timeout: 10000 });
    await myPage.clickElement(btn7);
    await myPage.clickElement(btnDiv);
    await myPage.clickElement(btn5);
    await myPage.clickElement(btnEq);
    expect(await myPage.getElementText(result)).toEqual("1.4");
    await myPage.clickElement(btnClr);
  });

  it("should multiply numbers", async () => {
    const btn8 = "id=com.google.android.calculator:id/digit_8";
    const btn4 = "id=com.google.android.calculator:id/digit_4";
    const btnMult = "id=com.google.android.calculator:id/op_mul";
    const btnEq = "id=com.google.android.calculator:id/eq";
    const result = "id=com.google.android.calculator:id/result_final";
    const btnClr = "id=com.google.android.calculator:id/clr";

    await myPage.clickElement(btn8);
    await myPage.clickElement(btnMult);
    await myPage.clickElement(btn4);
    await myPage.clickElement(btnEq);
    expect(await myPage.getElementText(result)).toEqual("32");
    await myPage.clickElement(btnClr);
  });

  it("should extract root from numbers", async () => {
    const btnRoot = "id=com.google.android.calculator:id/op_sqrt";
    const btnClr = "id=com.google.android.calculator:id/clr";
    const btn9 = "id=com.google.android.calculator:id/digit_9";
    const btnEq = "id=com.google.android.calculator:id/eq";
    const result = "id=com.google.android.calculator:id/result_final";

    await myPage.clickElement(btnRoot);
    await myPage.clickElement(btn9);
    await myPage.clickElement(btnEq);
    expect(await myPage.getElementText(result)).toEqual("3");
    await myPage.clickElement(btnClr);
  });

  it("should calculate correct factorial", async () => {
    const btnFact = "id=com.google.android.calculator:id/op_fact";
    const btnClr = "id=com.google.android.calculator:id/clr";
    const btnEq = "id=com.google.android.calculator:id/eq";
    const btn3 = "id=com.google.android.calculator:id/digit_3";
    const result = "id=com.google.android.calculator:id/result_final";

    await myPage.clickElement(btn3);
    await myPage.clickElement(btnFact);
    await myPage.clickElement(btnEq);
    expect(await myPage.getElementText(result)).toEqual("6");
    await myPage.clickElement(btnClr);
  });

  it("should subtract numbers correctly", async () => {
    const btnSub = "id=com.google.android.calculator:id/op_sub";
    const btn8 = "id=com.google.android.calculator:id/digit_8";
    const btnClr = "id=com.google.android.calculator:id/clr";
    const btnEq = "id=com.google.android.calculator:id/eq";
    const result = "id=com.google.android.calculator:id/result_final";

    // await btnClr.click();
    await myPage.clickElement(btn8);
    await myPage.clickElement(btnSub);
    await myPage.clickElement(btn8);
    await myPage.clickElement(btnEq);
    expect(await myPage.getElementText(result)).toEqual("0");
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
