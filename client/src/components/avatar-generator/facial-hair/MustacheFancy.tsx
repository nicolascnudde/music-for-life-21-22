/**
 * Fancy Mustache
 */
const MustacheFancy = ({ color }: { color: string }): any => {
  return (
    <svg
      id="Facial_Hair_Moustache_Fancy"
      data-name="Facial Hair/Moustache Fancy"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="168"
      height="152"
      viewBox="0 0 168 152"
    >
      <defs>
        <clipPath id="mustachepath">
          <path
            id="Moustache_U_a_Question"
            data-name="Moustache U a Question"
            d="M42,6.162c-9.905.669-19.04,9.388-30.378,8.947-2.595-.1-10.229-3.19-11.6-7.7a.481.481,0,0,1,.618-.581c8.866,2.755,13.975-3.491,19.75-5.7C25.578-.851,35.208-.288,42,3.3,48.793-.288,58.423-.851,63.612,1.131c5.774,2.206,10.884,8.452,19.75,5.7a.482.482,0,0,1,.619.581c-1.373,4.51-9.008,7.6-11.6,7.7-.279.011-.559.016-.836.016C60.587,15.125,51.661,6.814,42,6.162Z"
            transform="translate(42 66)"
            fill="#28354b"
          />
        </clipPath>
      </defs>
      <g id="Group_13" data-name="Group 13">
        <path
          id="Moustache_U_a_Question-2"
          data-name="Moustache U a Question"
          d="M42,6.162c-9.905.669-19.04,9.388-30.378,8.947-2.595-.1-10.229-3.19-11.6-7.7a.481.481,0,0,1,.618-.581c8.866,2.755,13.975-3.491,19.75-5.7C25.578-.851,35.208-.288,42,3.3,48.793-.288,58.423-.851,63.612,1.131c5.774,2.206,10.884,8.452,19.75,5.7a.482.482,0,0,1,.619.581c-1.373,4.51-9.008,7.6-11.6,7.7-.279.011-.559.016-.836.016C60.587,15.125,51.661,6.814,42,6.162Z"
          transform="translate(42 66)"
          fill="#28354b"
        />
        <g
          id="Mask_Group_13"
          data-name="Mask Group 13"
          clipPath="url(#mustachepath)"
        >
          <g id="_Facial_Hair_Color" data-name="↳ ✂️ Facial Hair Color">
            <g id="Color">
              <rect
                id="Color-2"
                data-name="Color"
                width="168"
                height="152"
                fill={color}
              />
              <rect
                id="Color-3"
                data-name="Color"
                width="168"
                height="152"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default MustacheFancy;
