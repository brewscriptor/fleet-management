import { FC, SVGAttributes } from 'react';

type ArrowIconProps = {
  width?: SVGAttributes<Element>['width'];
  height?: SVGAttributes<Element>['height'];
  fill?: SVGAttributes<Element>['fill'];
};

const ArrowIcon: FC<ArrowIconProps> = ({ width = 24, height = 24, fill = '#FEFEFE' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8.50965 5.92998L4.22965 14.49C1.34965 20.24 3.70965 22.6 9.45965 19.72L11.1996 18.85C11.7096 18.6 12.2996 18.6 12.8096 18.85L14.5396 19.72C20.2896 22.6 22.6496 20.25 19.7696 14.49L15.4896 5.92998C13.5696 2.08998 10.4296 2.08998 8.50965 5.92998ZM12.7496 9.15998L12.7496 14.56C12.7496 14.97 12.4096 15.31 11.9996 15.31C11.5896 15.31 11.2496 14.97 11.2496 14.56L11.2496 9.15998C11.2496 8.74998 11.5896 8.40998 11.9996 8.40998C12.4096 8.40998 12.7496 8.74998 12.7496 9.15998Z"
        fill={fill}
      />
    </svg>
  );
};

export default ArrowIcon;
