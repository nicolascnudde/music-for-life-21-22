/**
 * V-Neck shirt
 */
const ShirtVNeck = ({ color }: { color: string }) => {
  return (
    <svg
      id="Clothing_Shirt_V_Neck"
      data-name="Clothing/Shirt V Neck"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="264"
      height="110"
      viewBox="0 0 264 110"
    >
      <defs>
        <clipPath id="shirtpath">
          <path
            id="Clothes"
            d="M32,110v-8.949A71.987,71.987,0,0,1,92.681,29.936a23.855,23.855,0,0,0,7.556,13.6l29.085,26.229a4,4,0,0,0,5.358,0l29.084-26.229a23.87,23.87,0,0,0,7.555-13.6,71.323,71.323,0,0,1,23.988,8.352A71.9,71.9,0,0,1,232,101.051V110H32Z"
            fill="none"
          />
        </clipPath>
      </defs>
      <g id="Group_9" data-name="Group 9">
        <g id="Clothes-2" data-name="Clothes">
          <path
            id="Clothes-3"
            data-name="Clothes"
            d="M200,80.064H0V71.115A71.987,71.987,0,0,1,60.681,0a23.866,23.866,0,0,0,2.564,7.3,23.96,23.96,0,0,0,4.991,6.3L97.322,39.831a4,4,0,0,0,5.358,0L131.764,13.6a23.96,23.96,0,0,0,4.992-6.3A23.867,23.867,0,0,0,139.319,0a71.348,71.348,0,0,1,23.988,8.352A71.9,71.9,0,0,1,200,71.115v8.948Z"
            transform="translate(32 29.936)"
            fill="#e6e6e6"
          />
          <path
            id="Clothes-4"
            data-name="Clothes"
            d="M200,80.064H0V71.115A71.987,71.987,0,0,1,60.681,0a23.866,23.866,0,0,0,2.564,7.3,23.96,23.96,0,0,0,4.991,6.3L97.322,39.831a4,4,0,0,0,5.358,0L131.764,13.6a23.96,23.96,0,0,0,4.992-6.3A23.867,23.867,0,0,0,139.319,0a71.348,71.348,0,0,1,23.988,8.352A71.9,71.9,0,0,1,200,71.115v8.948Z"
            transform="translate(32 29.936)"
            fill="none"
          />
        </g>
        <g
          id="Mask_Group_9"
          data-name="Mask Group 9"
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
    </svg>
  );
};

export default ShirtVNeck;
