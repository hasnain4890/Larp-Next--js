import React from "react";

interface MediumProps {
  className?: string;
}

const Medium: React.FC<MediumProps> = ({ className }) => {
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
        d="M10 10V25H26V10H10ZM23.2929 13.5525L22.4357 14.3225C22.3607 14.3761 22.325 14.4632 22.3393 14.5469V20.2154C22.325 20.3025 22.3607 20.3895 22.4357 20.4397L23.275 21.2098V21.3806H19.0607V21.2165L19.9286 20.4263C20.0143 20.346 20.0143 20.3225 20.0143 20.202V15.6183L17.6 21.3638H17.275L14.4643 15.6183V19.4687C14.4393 19.6295 14.5 19.7935 14.6214 19.9107L15.75 21.1931V21.3638H12.5429V21.1931L13.6714 19.9107C13.7929 19.7935 13.8464 19.6295 13.8179 19.4687V15.0156C13.8321 14.8917 13.7821 14.7712 13.6821 14.6875L12.6786 13.5525V13.3817H15.7964L18.2036 18.3371L20.3214 13.385H23.2929V13.5525Z"
        fill="#878693"
      />
    </svg>
  );
};

export default Medium;
export { Medium as ReactComponent };
