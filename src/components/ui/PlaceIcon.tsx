type IconProps = {
  className?: string;
};

export default function PlaceIcon({ className = "" }: IconProps) {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.83337 17.667C3.67345 18.6198 2.33337 19.9476 2.33337 21.4162C2.33337 24.3157 7.55672 26.6662 14 26.6662C20.4434 26.6662 25.6667 24.3157 25.6667 21.4162C25.6667 19.9476 24.3266 18.6198 22.1667 17.667"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0001 12.751C15.5079 12.751 16.7301 11.5288 16.7301 10.021C16.7301 8.51328 15.5079 7.29102 14.0001 7.29102C12.4924 7.29102 11.2701 8.51328 11.2701 10.021C11.2701 11.5288 12.4924 12.751 14.0001 12.751Z"
        fill="currentColor"
      />
      <path
        opacity="0.4"
        d="M6.66762 8.42875C8.39137 0.851252 19.6176 0.860002 21.3326 8.4375C22.3389 12.8825 19.5739 16.645 17.1501 18.9725C14.1226 22 13.8689 22 10.8414 18.9725C8.46972 16.6008 5.66137 12.8738 6.66762 8.42875Z"
        fill="currentColor"
      />
    </svg>
  );
}
