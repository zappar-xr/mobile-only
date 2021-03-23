/* eslint-disable no-undef */
jest.setTimeout(30000);

const url = 'https://127.0.0.1:8085/defaultUI.html';

describe('HTML Elements', () => {
  beforeAll(async () => {
    await page.goto(url);
  });

  it('show default header', async () => {
    expect(page.content()).resolves.toContain('Almost there...');
  });

  it('show default instructions', async () => {
    expect(page.content()).resolves.toContain("Use your phone's camera to scan the QR code below");
  });

  it('show default footer', async () => {
    expect(page.content()).resolves.toContain('or visit');
  });
  it('show window.location.href url', async () => {
    expect(page.content()).resolves.toContain('https://127.0.0.1:8085');
  });
});
