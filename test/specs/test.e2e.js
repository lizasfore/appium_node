// test.e2e.ts
import Page from "../pageobjects/page.js";

const myPage = new Page();

describe("My Login application", () => {
  it("should divide numbers properly", async () => {
    const btn7 = await browser.$("id=com.google.android.calculator:id/digit_7");
    const btnDiv = await browser.$(
      "id=com.google.android.calculator:id/op_div"
    );
    const btn5 = await browser.$("id=com.google.android.calculator:id/digit_5");
    const btnEq = await browser.$("id=com.google.android.calculator:id/eq");
    const result = await browser.$(
      "id=com.google.android.calculator:id/result_final"
    );
    const btnClr = await browser.$("id=com.google.android.calculator:id/clr");

    await browser.pause(10000);
    await btn7.click();
    await btnDiv.click();
    await btn5.click();
    await btnEq.click();
    expect(await result.getText()).toEqual("1.4");
    await btnClr.click();

    // Example assertions (adjust based on actual application behavior)
    // const result = await browser.$("id=com.google.android.calculator:id/result");
    // expect(await result.getText()).toEqual("Expected Result");
  });

  it("should multiply numbers", async () => {
    const btn8 = await browser.$("id=com.google.android.calculator:id/digit_8");
    const btn4 = await browser.$("id=com.google.android.calculator:id/digit_4");
    const btnMult = await browser.$(
      "id=com.google.android.calculator:id/op_mul"
    );
    const btnEq = await browser.$("id=com.google.android.calculator:id/eq");
    const result = await browser.$(
      "id=com.google.android.calculator:id/result_final"
    );
    const btnClr = await browser.$("id=com.google.android.calculator:id/clr");

    await btn8.click();
    await btnMult.click();
    await btn4.click();
    await btnEq.click();
    expect(await result.getText()).toEqual("32");
    await btnClr.click();
  });

  it("should extract root from numbers", async () => {
    const btnRoot = await browser.$(
      "id=com.google.android.calculator:id/op_sqrt"
    );
    const btnClr = await browser.$("id=com.google.android.calculator:id/clr");
    const btn9 = await browser.$("id=com.google.android.calculator:id/digit_9");
    const btnEq = await browser.$("id=com.google.android.calculator:id/eq");
    const result = await browser.$(
      "id=com.google.android.calculator:id/result_final"
    );

    await btnRoot.click();
    await btn9.click();
    await btnEq.click();
    expect(await result.getText()).toEqual("3");
    await btnClr.click();
  });

  it("should calculate correct factorial", async () => {
    const btnFact = await browser.$(
      "id=com.google.android.calculator:id/op_fact"
    );
    const btnClr = await browser.$("id=com.google.android.calculator:id/clr");
    const btnEq = await browser.$("id=com.google.android.calculator:id/eq");
    const btn3 = await browser.$("id=com.google.android.calculator:id/digit_3");
    const result = await browser.$(
      "id=com.google.android.calculator:id/result_final"
    );

    await btn3.click();
    await btnFact.click();
    await btnEq.click();
    expect(await result.getText()).toEqual("6");
    await btnClr.click();
  });

  it("should subtract numbers correctly", async () => {
    const btnSub = await browser.$(
      "id=com.google.android.calculator:id/op_sub"
    );
    const btn8 = await browser.$("id=com.google.android.calculator:id/digit_8");
    const btnClr = await browser.$("id=com.google.android.calculator:id/clr");
    const btnEq = await browser.$("id=com.google.android.calculator:id/eq");
    const result = await browser.$(
      "id=com.google.android.calculator:id/result_final"
    );

    // await btnClr.click();
    await btn8.click();
    await btnSub.click();
    await btn8.click();
    await btnEq.click();
    expect(await result.getText()).toEqual("0");
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
