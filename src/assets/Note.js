const Note = (props) => (
  <svg
    width={20}
    height={19}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M8 16V1.97L19 1v12" stroke="#4E4E4E" />
    <ellipse cx={4.5} cy={16} rx={3.5} ry={2} stroke="#4E4E4E" />
    <ellipse cx={15.5} cy={13} rx={3.5} ry={2} stroke="#4E4E4E" />
  </svg>
);

export default Note;
