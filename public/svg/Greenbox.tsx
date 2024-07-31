import React from "react";

interface GreenboxProps {
  className?: string;
}

const Greenbox: React.FC<GreenboxProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path d="M0 0H12V12H0V0Z" fill="#4894a9" />
    </svg>
  );
};

export default Greenbox;
export { Greenbox as ReactComponent };
