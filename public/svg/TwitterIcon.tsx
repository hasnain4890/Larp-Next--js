import React from "react";

interface TwitterProps {
  className?: string;
}

const Twitter: React.FC<TwitterProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 36 36"
      fill="none"
    >
      <circle cx="18" cy="18" r="18" fill="#1B1530" />
      <path
        d="M19.3319 16.3516L24.5437 10H23.3086L18.7833 15.5148L15.1689 10H11L16.4657 18.3395L11 25H12.2351L17.0141 19.1761L20.8311 25H25L19.3316 16.3516H19.3319ZM17.6403 18.4129L17.0864 17.5825L12.6801 10.9748H14.5772L18.133 16.3075L18.6868 17.1379L23.3091 24.0695H21.4123L17.6403 18.4132V18.4129Z"
        fill="white"
      />
    </svg>
  );
};

export default Twitter;
export { Twitter as ReactComponent };
