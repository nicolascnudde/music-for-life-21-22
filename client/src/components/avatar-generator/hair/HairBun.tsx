/**
 * Hair Bob
 */
const HairBun = ({ color }: { color: string }): any => {
  return (
    <svg
      id="Top_Long_Hair_Bun"
      data-name="Top/Long Hair/Bun"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="266"
      height="280"
      viewBox="0 0 266 280"
    >
      <defs>
        <clipPath id="hairbunpath">
          <path
            id="Short_Hair"
            data-name="Short Hair"
            d="M1.268,95.7A33.456,33.456,0,0,1,.023,85.481,67.676,67.676,0,0,1,6.357,59.648c7.66-16,16.588-26.81,31.68-30.618q1.423-.359,2.9-.693A15.043,15.043,0,0,1,36,17.5C36,7.835,46.3,0,59,0S82,7.835,82,17.5a15.025,15.025,0,0,1-4.884,10.783,65.515,65.515,0,0,1,16.193,6.724c20.187,11.7,23.874,38.105,24.592,48.153a45.088,45.088,0,0,1-1.15,13.279c-.588,2.549-1.66,2.613-2.132-.237-1.242-7.493.628-15.986-3.437-22.9C107.749,67.461,96.235,40.136,59,41.671S17.188,60.521,10.787,68.848c-2.586,3.365-4.276,7.689-5.6,11.677a34.528,34.528,0,0,0-1.651,8.59,40.344,40.344,0,0,0-.112,4.722c.059,1.2.667,2.747.5,3.871C3.784,98.644,3.545,99,3.264,99,2.53,99,1.511,96.573,1.268,95.7Z"
            transform="translate(74)"
            fill="#28354b"
          />
        </clipPath>
      </defs>
      <g id="Facial_Hair" data-name="Facial Hair" transform="translate(49 72)">
        <rect
          id="Facial_Hair_-Blank_background"
          data-name="Facial Hair/-Blank background"
          width="168"
          height="152"
          fill="none"
        />
      </g>
      <g id="Group_22" data-name="Group 22">
        <path
          id="Short_Hair-2"
          data-name="Short Hair"
          d="M1.268,95.7A33.456,33.456,0,0,1,.023,85.481,67.676,67.676,0,0,1,6.357,59.648c7.66-16,16.588-26.81,31.68-30.618q1.423-.359,2.9-.693A15.043,15.043,0,0,1,36,17.5C36,7.835,46.3,0,59,0S82,7.835,82,17.5a15.025,15.025,0,0,1-4.884,10.783,65.515,65.515,0,0,1,16.193,6.724c20.187,11.7,23.874,38.105,24.592,48.153a45.088,45.088,0,0,1-1.15,13.279c-.588,2.549-1.66,2.613-2.132-.237-1.242-7.493.628-15.986-3.437-22.9C107.749,67.461,96.235,40.136,59,41.671S17.188,60.521,10.787,68.848c-2.586,3.365-4.276,7.689-5.6,11.677a34.528,34.528,0,0,0-1.651,8.59,40.344,40.344,0,0,0-.112,4.722c.059,1.2.667,2.747.5,3.871C3.784,98.644,3.545,99,3.264,99,2.53,99,1.511,96.573,1.268,95.7Z"
          transform="translate(74)"
          fill="#28354b"
        />
        <g
          id="Mask_Group_23"
          data-name="Mask Group 23"
          clipPath="url(#hairbunpath)"
        >
          <g
            id="_Hair_Color"
            data-name="↳ 💈Hair Color"
            transform="translate(1)"
          >
            <g id="Color">
              <rect
                id="Color-2"
                data-name="Color"
                width="264"
                height="280"
                fill="#724133"
              />
              <rect
                id="Color-3"
                data-name="Color"
                width="264"
                height="280"
                fill={color}
              />
            </g>
          </g>
        </g>
      </g>
      <g
        id="_Accessory"
        data-name="↳ 👓 Accessory"
        transform="translate(62 85)"
      >
        <rect
          id="Top__Resources_Blank_background"
          data-name="Top/_Resources/Blank background"
          width="142"
          height="54"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default HairBun;
