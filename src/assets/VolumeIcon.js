const Volume = (props) => (
  <svg
    width={14}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="volume_svg__a" fill="#fff">
      <path fillRule="evenodd" clipRule="evenodd" d="M8 0 3 5H0v8h3l5 5V0Z" />
    </mask>
    <path
      d="M3 5v1h.414l.293-.293L3 5Zm5-5h1v-2.414L7.293-.707 8 0ZM0 5V4h-1v1h1Zm0 8h-1v1h1v-1Zm3 0 .707-.707L3.414 12H3v1Zm5 5-.707.707L9 20.414V18H8ZM3.707 5.707l5-5L7.293-.707l-5 5 1.414 1.414ZM0 6h3V4H0v2Zm1 7V5h-2v8h2Zm2-1H0v2h3v-2Zm5.707 5.293-5-5-1.414 1.414 5 5 1.414-1.414ZM7 0v18h2V0H7Z"
      fill="#fff"
      mask="url(#volume_svg__a)"
    />
    <path d="M11 13c1.105 0 2-1.79 2-4s-.895-4-2-4" />
  </svg>
)

export default Volume
