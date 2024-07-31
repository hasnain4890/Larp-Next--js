import React from 'react';

interface EtheriumProps {
  className?: string;
}

const Etherium: React.FC<EtheriumProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="107"
      height="112"
      viewBox="0 0 107 112"
      fill="none"
    >
      <path
        d="M58.4063 100.073V89.2092C58.4063 86.8091 56.4607 84.8635 54.0607 84.8635H13.8632C11.4632 84.8635 9.51758 86.8091 9.51758 89.2092V100.073"
        stroke="#101A32"
        strokeWidth="1.08642"
      />
      <path
        d="M95.3238 0.538023L84.2243 0.551488C81.8243 0.5544 79.881 2.50238 79.8839 4.90243L79.9293 42.2903C79.9322 44.6904 81.8802 46.6336 84.2802 46.6307L95.3797 46.6172"
        stroke="#101A32"
        strokeWidth="1.08642"
      />
      <rect
        x="10.0608"
        y="0.666255"
        width="47.8023"
        height="46.7159"
        rx="3.80246"
        stroke="#101A32"
        strokeWidth="1.08642"
      />
      <circle
        cx="53.9097"
        cy="58.6385"
        r="39.7739"
        transform="rotate(24.3991 53.9097 58.6385)"
        fill="#13111C"
        stroke="#306DE8"
        strokeWidth="0.65185"
      />
      <path
        d="M54 54.6667L50.75 56.5625V60.3542L54 62.25L57.25 60.3542V56.5625L54 54.6667ZM55.6434 56.8767L53.9859 57.843L52.3425 56.8843L54 55.9179L55.6434 56.8767ZM51.8225 57.8322L53.4302 58.7703V60.6662L51.8225 59.7291V57.8322ZM54.5027 60.7063V58.792L56.1775 57.8148V59.7291L54.5027 60.7063ZM44.25 46L41 47.8958V51.6875L44.25 53.5833L47.5 51.6875V47.8958L44.25 46ZM45.8934 48.21L44.2359 49.1763L42.5925 48.2176L44.25 47.2513L45.8934 48.21ZM42.0725 49.1644L43.6802 50.1026V51.9984L42.0725 51.0635V49.1644ZM44.7527 52.0385V50.1253L46.4275 49.1482V51.0624L44.7527 52.0385ZM44.25 64.4167L41 66.3125V70.1042L44.25 72L47.5 70.1042V66.3125L44.25 64.4167ZM45.8934 66.6267L44.2359 67.593L42.5925 66.6343L44.25 65.6679L45.8934 66.6267ZM42.0725 67.5822L43.6802 68.5203V70.4162L42.0725 69.4802V67.5822ZM44.7527 70.4563V68.542L46.4275 67.5648V69.4791L44.7527 70.4563ZM63.75 46L60.5 47.8958V51.6875L63.75 53.5833L67 51.6875V47.8958L63.75 46ZM65.3934 48.21L63.7359 49.1763L62.0925 48.2176L63.75 47.2513L65.3934 48.21ZM61.5725 49.1655L63.1802 50.1037V51.9995L61.5725 51.0624V49.1655ZM64.2527 52.0396V50.1253L65.9275 49.1482V51.0624L64.2527 52.0396ZM63.75 64.4167L60.5 66.3125V70.1042L63.75 72L67 70.1042V66.3125L63.75 64.4167ZM65.3934 66.6267L63.7359 67.593L62.0925 66.6343L63.75 65.6679L65.3934 66.6267ZM61.5725 67.5822L63.1802 68.5203V70.4162L61.5725 69.4791V67.5822ZM64.2527 70.4563V68.542L65.9275 67.5648V69.4791L64.2527 70.4563ZM50.75 49.25H57.25V50.3333H50.75V49.25ZM50.75 67.6667H57.25V68.75H50.75V67.6667ZM44.7917 55.75V62.25H43.7083V55.75H44.7917ZM48.9008 55.5637L46.603 53.2659L47.3689 52.5L49.6667 54.7967L48.9008 55.5637ZM58.3333 54.9841L60.6311 52.6863L61.397 53.4523L59.0993 55.75L58.3333 54.9841ZM49.8053 62.1189L47.5076 64.4167L46.7417 63.6507L49.0394 61.353L49.8053 62.1189ZM59.2856 61.3064L61.5833 63.6042L60.8174 64.3701L58.5197 62.0723L59.2856 61.3064ZM64.2917 55.75V62.25H63.2083V55.75H64.2917Z"
        fill="#306DE8"
      />
    </svg>
  );
};

export default Etherium;
export { Etherium as ReactComponent };
