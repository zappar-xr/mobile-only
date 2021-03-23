/* eslint-disable no-undef */
jest.setTimeout(30000);

const url = 'https://127.0.0.1:8085/customUI.html';

describe('HTML Elements', () => {
  beforeAll(async () => {
    await page.goto(url);
  });

  it('show custom header', async () => {
    expect(page.content()).resolves.toContain('-header-');
  });

  it('show custom instructions', async () => {
    expect(page.content()).resolves.toContain('=instructions=');
  });

  it('show custom footer', async () => {
    expect(page.content()).resolves.toContain('--footer--');
  });
  it('show custom url', async () => {
    expect(page.content()).resolves.toContain('www.zappar.com');
  });
});
