module.exports = {
  launch: {
    headless: false,
    args: [
      '--ignore-certificate-errors',
    ],
  },
  server: {
    command: 'npm run serve',
    port: 8085,
    launchTimeout: 60000,
  },
};
