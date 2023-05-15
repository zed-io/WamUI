import React from "react";
import { Svg, Path } from "react-native-svg";

type Props = { size?: number | string; color?: string };

export const ClearInput = ({ size = 24, color = "#A0A0A0" }: Props) => {
  return (
    <Svg width={17} height={17} viewBox="0 0 16 17" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8.5C16 12.9183 12.4183 16.5 8 16.5C3.58172 16.5 0 12.9183 0 8.5C0 4.08172 3.58172 0.5 8 0.5C12.4183 0.5 16 4.08172 16 8.5ZM5.27364 5.77364C5.45389 5.5934 5.74611 5.5934 5.92636 5.77364L8.00001 7.8473L10.0737 5.77364C10.2539 5.5934 10.5461 5.5934 10.7264 5.77364C10.9066 5.95389 10.9066 6.24612 10.7264 6.42636L8.65273 8.50001L10.7264 10.5736C10.9066 10.7539 10.9066 11.0461 10.7264 11.2264C10.5461 11.4066 10.2539 11.4066 10.0736 11.2264L8.00001 9.15273L5.92638 11.2264C5.74614 11.4066 5.45391 11.4066 5.27367 11.2264C5.09343 11.0461 5.09343 10.7539 5.27367 10.5736L7.3473 8.50001L5.27364 6.42636C5.0934 6.24611 5.0934 5.95389 5.27364 5.77364Z"
        fill="#A0A0A0"
      />
    </Svg>
  );
};

const ClearInputIcon = React.memo(ClearInput);
export default ClearInputIcon;
