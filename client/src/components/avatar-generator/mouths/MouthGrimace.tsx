/**
 * Grimacing Mouth
 */
const MouthGrimace = () => {
  return (
    <svg
      id="Mouth_Grimace"
      data-name="Mouth/Grimace"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="64"
      height="26"
      viewBox="0 0 64 26"
    >
      <defs>
        <clipPath id="mouthclip">
          <rect
            id="Mouth"
            width="60"
            height="22"
            rx="11"
            transform="translate(24 9)"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <rect
        id="Mouth-2"
        data-name="Mouth"
        width="64"
        height="26"
        rx="13"
        fill="rgba(0,0,0,0.6)"
      />
      <g id="Group_16" data-name="Group 16" transform="translate(-22 -7)">
        <rect
          id="Mouth-3"
          data-name="Mouth"
          width="60"
          height="22"
          rx="11"
          transform="translate(24 9)"
          fill="#fff"
        />
        <g
          id="Mask_Group_16"
          data-name="Mask Group 16"
          clipPath="url(#mouthclip)"
        >
          <g id="Grimace_Teeth" data-name="Grimace Teeth">
            <path
              id="Grimace_Teeth-2"
              data-name="Grimace Teeth"
              d="M46.867,28V16h-9V28h-4V16h-9V28h-4V16h-9V28h-4V16h-8V12h8V0h4V12h9V0h4V12h9V0h4V12h9V0h4V12h8.866v4H50.867V28Z"
              transform="translate(24.133 6)"
              fill="#e6e6e6"
            />
            <path
              id="Grimace_Teeth-3"
              data-name="Grimace Teeth"
              d="M46.867,28V16h-9V28h-4V16h-9V28h-4V16h-9V28h-4V16h-8V12h8V0h4V12h9V0h4V12h9V0h4V12h9V0h4V12h8.866v4H50.867V28Z"
              transform="translate(24.133 6)"
              fill="none"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MouthGrimace;
