import { FC, SVGAttributes } from 'react';

type StartIconProps = {
  width?: SVGAttributes<Element>['width'];
  height?: SVGAttributes<Element>['height'];
};

const StartIcon: FC<StartIconProps> = ({ width = 120, height = 120 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_1232_6790)">
        <circle cx="60" cy="60" r="30" fill="#308552" fillOpacity="0.2" />
      </g>
      <circle cx="60" cy="60" r="20" fill="#308552" />
      <path
        d="M68.6201 56.45C67.5701 51.83 63.5401 49.75 60.0001 49.75C60.0001 49.75 60.0001 49.75 59.9901 49.75C56.4601 49.75 52.4201 51.82 51.3701 56.44C50.2001 61.6 53.3601 65.97 56.2201 68.72C57.2801 69.74 58.6401 70.25 60.0001 70.25C61.3601 70.25 62.7201 69.74 63.7701 68.72C66.6301 65.97 69.7901 61.61 68.6201 56.45ZM60.0001 61.46C58.2601 61.46 56.8501 60.05 56.8501 58.31C56.8501 56.57 58.2601 55.16 60.0001 55.16C61.7401 55.16 63.1501 56.57 63.1501 58.31C63.1501 60.05 61.7401 61.46 60.0001 61.46Z"
        fill="white"
      />
      <defs>
        <filter
          id="filter0_b_1232_6790"
          x="26"
          y="26"
          width="68"
          height="68"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1232_6790" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_1232_6790"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default StartIcon;
