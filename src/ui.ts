/* eslint-disable max-len */
import getSVG from './qrSVG';

type Options = Partial<{
    header : string,
    instructions : string,
    footer : string,
    url : string
}>
const show = (opts? : Options) : void => {
  const header = opts?.header || 'Almost there...';
  const instructions = opts?.instructions || "Use your phone's camera to scan the QR code below";
  const footer = opts?.footer || 'or visit';
  const url = opts?.url || window?.location?.href || '0.0.0.0';

  const div = document.createElement('div');
  div.classList.add('zappar-mobile-only');
  div.innerHTML = `
    <style>
        .zappar-mobile-only {
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0px;
            left: 0px;
            z-index: 10000;
            background-color: rgba(0, 0, 0, 0.9);
            font-family: sans-serif;
            color: white;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        .zappar-inner {
            max-width: 400px;
            text-align: center;
        }
        .zappar-title {
            font-size: 20px;
        }
        .zappar-text {
            font-size: 14px;
            padding: 15px;
        }

    </style>
    <div class="zappar-inner">
        <div class="zappar-title">${header}</div>
        <div class="zappar-text">${instructions}</div>
        <div class="zappar-svg-container"></div>
        <div class="zappar-text">${footer} <br/> ${url}</div>
    </div>
`;
  document.body.append(div);
  const svgContainer = document.getElementsByClassName('zappar-svg-container')[0];

  svgContainer.innerHTML = getSVG(url);
};

export default show;
