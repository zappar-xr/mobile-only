import { devices } from 'puppeteer';
import * as mo from '../src/index';
/* eslint-disable no-undef */
jest.setTimeout(30000);

const url = 'https://127.0.0.1:8085/isMobile.html';

describe('User agent Detection', () => {
  beforeAll(async () => {
    await page.goto(url);
  });

  it('non-mobile', async () => {
    expect(mo.isMobile()).toBe(false);
  });

  // **ios**
  it('iPhone X', async () => {
    const page = await browser.newPage();
    const iPhonex = devices['iPhone X'];
    await page.emulate(iPhonex);
    page.goto(url);
    expect(mo.isMobile(iPhonex.userAgent)).toBe(true);
  });

  it('iPad Pro', async () => {
    const page = await browser.newPage();
    const iPhonex = devices['iPad Pro'];
    await page.emulate(iPhonex);
    page.goto(url);
    expect(mo.isMobile(iPhonex.userAgent)).toBe(true);
  });

  // **android**
  it('Galaxy Note 3', async () => {
    const page = await browser.newPage();
    const iPhonex = devices['Galaxy Note 3'];
    await page.emulate(iPhonex);
    page.goto(url);
    expect(mo.isMobile(iPhonex.userAgent)).toBe(true);
  });

  it('Nexus 10 landscape', async () => {
    const page = await browser.newPage();
    const iPhonex = devices['Nexus 10 landscape'];
    await page.emulate(iPhonex);
    page.goto(url);
    expect(mo.isMobile(iPhonex.userAgent)).toBe(true);
  });
});
