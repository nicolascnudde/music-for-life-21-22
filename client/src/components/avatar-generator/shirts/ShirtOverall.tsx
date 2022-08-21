/**
 * Overall shirt
 */
const ShirtOverall = ({ color }: { color: string }) => {
  return (
    <svg
      id="Clothing_Overall"
      data-name="Clothing/Overall"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="264"
      height="110"
      viewBox="0 0 264 110"
    >
      <defs>
        <clipPath id="shirtpath">
          <path
            id="Overall"
            d="M170,110H68V38.632a71.52,71.52,0,0,1,26-8.943V74h76V29.689a71.532,71.532,0,0,1,26,8.943V110Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_6" data-name="Group 6">
        <g id="Overall-2" data-name="Overall">
          <path
            id="Overall-3"
            data-name="Overall"
            d="M102,80.312H0V8.944A71.536,71.536,0,0,1,26,0V44.312h76V0a71.536,71.536,0,0,1,26,8.943V80.312Z"
            transform="translate(68 29.688)"
            fill="#b7c1db"
          />
          <path
            id="Overall-4"
            data-name="Overall"
            d="M102,80.312H0V8.944A71.536,71.536,0,0,1,26,0V44.312h76V0a71.536,71.536,0,0,1,26,8.943V80.312Z"
            transform="translate(68 29.688)"
            fill="none"
          />
        </g>
        <g
          id="Mask_Group_6"
          data-name="Mask Group 6"
          clipPath="url(#shirtpath)"
        >
          <g id="_Color_Fabric" data-name="↳ Color Fabric">
            <g id="_Color" data-name="🖍Color">
              <rect
                id="_Color-2"
                data-name="🖍Color"
                width="264"
                height="110"
                fill={color}
              />
              <rect
                id="_Color-3"
                data-name="🖍Color"
                width="264"
                height="110"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
      <g id="Button">
        <circle
          id="Button-2"
          data-name="Button"
          cx="5"
          cy="5"
          r="5"
          transform="translate(76 78)"
          fill="#f4f4f4"
        />
        <circle
          id="Button-3"
          data-name="Button"
          cx="5"
          cy="5"
          r="5"
          transform="translate(76 78)"
          fill="none"
        />
      </g>
      <g id="Button-4" data-name="Button">
        <circle
          id="Button-5"
          data-name="Button"
          cx="5"
          cy="5"
          r="5"
          transform="translate(178 78)"
          fill="#f4f4f4"
        />
        <circle
          id="Button-6"
          data-name="Button"
          cx="5"
          cy="5"
          r="5"
          transform="translate(178 78)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default ShirtOverall;
