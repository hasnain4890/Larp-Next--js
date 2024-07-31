import React from "react";

interface DixtoolIconProps {
  className?: string;
}

const DixtoolIcon: React.FC<DixtoolIconProps> = ({ className }) => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M20.05 25.9822C21.146 25.4236 22.0427 24.9509 22.0425 24.9317C22.042 24.8821 19.412 23.579 19.3187 23.5822C19.2762 23.5836 18.9682 23.7223 18.6342 23.8904L18.0269 24.196L17.3636 23.8625L16.7003 23.5288L15.6141 24.0064C13.9774 24.7259 13.8074 24.8048 13.834 24.8313C13.8694 24.8664 14.4564 25.175 16.0492 25.9953C16.8189 26.3918 17.566 26.7806 17.7094 26.8593C17.8528 26.9379 17.9897 27.0012 18.0137 27C18.0376 26.9988 18.954 26.5407 20.05 25.9822ZM24.857 23.5468L25.9979 22.9702V20.4397C25.9979 19.0479 25.983 17.9092 25.9646 17.9092C25.9463 17.9092 25.3849 18.1473 24.7172 18.4382L23.5031 18.9673V21.6346L22.9099 21.3184C22.4527 21.0749 21.9952 20.8319 21.5375 20.5894L20.7585 20.1768L20.4118 20.3301C20.1944 20.4265 19.9775 20.5238 19.7609 20.622C19.5936 20.6982 19.1829 20.8792 18.8482 21.0243C18.5135 21.1694 18.2038 21.3153 18.1598 21.3486C18.1015 21.3927 18.813 21.7774 20.7917 22.7715C22.2831 23.5209 23.5513 24.1316 23.6097 24.1287C23.6682 24.1257 24.2295 23.8639 24.857 23.5468ZM13.6284 23.3848C14.4055 23.0416 15.0418 22.7471 15.0425 22.7303C15.0432 22.7136 14.6196 22.4672 14.1013 22.1829C13.583 21.8986 13.1589 21.6508 13.1589 21.6321C13.1589 21.6135 13.6175 21.396 14.1781 21.1488C14.7387 20.9017 16.1556 20.2756 17.327 19.7575L21.2517 18.0218C22.239 17.5852 23.1289 17.1916 23.2293 17.1471C25.2459 16.254 25.8001 16.0062 25.8762 15.9636C25.9528 15.9208 25.9701 15.672 25.9837 14.4231L26 12.9336L24.9797 12.425L23.9595 11.9164L22.5448 12.5411C21.7666 12.8846 21.13 13.1837 21.13 13.2058C21.13 13.2277 21.2738 13.3194 21.4495 13.4095C21.6252 13.4997 21.988 13.6992 22.2557 13.8531C22.5235 14.0069 22.7904 14.1481 22.849 14.1668C22.9076 14.1855 22.9547 14.2181 22.9537 14.2394C22.9528 14.2607 22.3298 14.5502 21.5694 14.8828C20.0926 15.5289 18.9624 16.0268 16.536 17.1003C15.451 17.5803 14.3658 18.0599 13.2805 18.5393C12.3267 18.9605 11.2178 19.4524 10.8162 19.6325L10.086 19.9598L10.0697 21.4663L10.0534 22.9727L11.0882 23.4923C11.6574 23.7781 12.1439 24.0112 12.1694 24.0104C12.1949 24.0096 12.8514 23.7281 13.6284 23.3848ZM10.3632 17.9501C10.5157 17.8773 10.8169 17.7408 11.0325 17.647C11.2482 17.5531 11.6574 17.3725 11.9419 17.2455L12.4591 17.0147L12.4709 15.6921C12.4774 14.9647 12.5048 14.3728 12.5317 14.3767C12.593 14.3856 13.5623 14.872 14.5368 15.3828C15.2401 15.7515 15.2842 15.7662 15.4495 15.6861C15.545 15.6398 16.1161 15.3892 16.7185 15.1292C17.3209 14.8692 17.8334 14.6395 17.8575 14.6187C17.8816 14.5979 16.6692 13.955 15.1632 13.1899L12.4252 11.7988L11.2556 12.3908C10.6123 12.7163 10.0654 13.0133 10.0402 13.0506C9.98347 13.1346 9.98832 18.0942 10.0451 18.0874C10.0675 18.0848 10.2107 18.023 10.3632 17.9501ZM16.8402 12.1289C17.0431 12.0435 17.2459 11.9581 17.4487 11.8725C18.061 11.6133 17.941 11.6047 18.6695 11.9595C19.1547 12.1958 19.3638 12.2687 19.4546 12.2333C19.5227 12.2068 20.1088 11.9488 20.757 11.6601C21.4053 11.3714 21.9581 11.1352 21.9856 11.1352C22.2576 11.1352 21.8055 10.8709 20.0607 10.0098L18.0144 9L17.1535 9.41585C16.68 9.64458 15.7249 10.1026 15.031 10.4336C14.3372 10.7648 13.7782 11.0443 13.7886 11.0548C13.7992 11.0653 14.3805 11.3574 15.0806 11.7039L16.3534 12.3337L16.8402 12.1289Z"
        fill="#878693"
      />
    </svg>
  );
};

export default DixtoolIcon;
export { DixtoolIcon as ReactComponent };
