import QRCode = require('qrcode-svg');

const getSVG = (url : string) : string => {
  const qrcode = new QRCode({
    content: url,
    join: true,
  });

  return qrcode.svg();
};

export default getSVG;
