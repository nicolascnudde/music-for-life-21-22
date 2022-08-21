/**
 * Vomiting Mouth
 */
const MouthVomit = () => {
  return (
    <svg
      id="Mouth_Vomit"
      data-name="Mouth/Vomit"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="40"
      height="33"
      viewBox="0 0 40 33"
    >
      <defs>
        <clipPath id="mouthclip">
          <path
            id="Mouth"
            d="M.008-1.6C1.128-12.093,4.235-20.994,20-21s18.921,8.958,20,19.5c.087.848-.82,1.5-1.957,1.5C31.351,0,28.67-1.5,19.989-1.5S6.757,0,2.092,0C.949,0-.1-.552.008-1.6Z"
            transform="translate(34 32)"
            fill="rgba(0,0,0,0.7)"
          />
        </clipPath>
        <filter
          id="Vomit_Stuff"
          x="2"
          y="14"
          width="36"
          height="19"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="-1" />
          <feGaussianBlur result="blur" />
          <feFlood floodOpacity="0.102" result="color" />
          <feComposite operator="out" in="SourceGraphic" in2="blur" />
          <feComposite operator="in" in="color" />
          <feComposite operator="in" in2="SourceGraphic" />
        </filter>
      </defs>
      <g id="Group_20" data-name="Group 20" transform="translate(-34 -11)">
        <path
          id="Mouth-2"
          data-name="Mouth"
          d="M.008-1.6C1.128-12.093,4.235-20.994,20-21s18.921,8.958,20,19.5c.087.848-.82,1.5-1.957,1.5C31.351,0,28.67-1.5,19.989-1.5S6.757,0,2.092,0C.949,0-.1-.552.008-1.6Z"
          transform="translate(34 32)"
          fill="rgba(0,0,0,0.7)"
        />
        <g
          id="Mask_Group_20"
          data-name="Mask Group 20"
          clipPath="url(#mouthclip)"
        >
          <g id="Teeth">
            <rect
              id="Teeth-2"
              data-name="Teeth"
              width="31"
              height="16"
              rx="5"
              transform="translate(39)"
              fill="#fff"
            />
            <rect
              id="Teeth-3"
              data-name="Teeth"
              width="31"
              height="16"
              rx="5"
              transform="translate(39)"
              fill="none"
            />
          </g>
        </g>
      </g>
      <g
        id="Vomit_Stuff-2"
        data-name="Vomit Stuff"
        transform="translate(-34 -11)"
      >
        <g data-type="innerShadowGroup">
          <path
            id="Vomit_Stuff-3"
            data-name="Vomit Stuff"
            d="M6,19a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0H30a6.007,6.007,0,0,1,6,6v5a6,6,0,1,1-12,0h-.083a6,6,0,0,0-11.835,0H12v2A6.007,6.007,0,0,1,6,19Z"
            transform="translate(36 25)"
            fill="#88c553"
          />
          <g transform="matrix(1, 0, 0, 1, 34, 11)" filter="url(#Vomit_Stuff)">
            <path
              id="Vomit_Stuff-4"
              data-name="Vomit Stuff"
              d="M6,19a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0H30a6.007,6.007,0,0,1,6,6v5a6,6,0,1,1-12,0h-.083a6,6,0,0,0-11.835,0H12v2A6.007,6.007,0,0,1,6,19Z"
              transform="translate(2 14)"
              fill="#fff"
            />
          </g>
        </g>
        <path
          id="Vomit_Stuff-5"
          data-name="Vomit Stuff"
          d="M6,19a6.007,6.007,0,0,1-6-6V6A6.007,6.007,0,0,1,6,0H30a6.007,6.007,0,0,1,6,6v5a6,6,0,1,1-12,0h-.083a6,6,0,0,0-11.835,0H12v2A6.007,6.007,0,0,1,6,19Z"
          transform="translate(36 25)"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default MouthVomit;
