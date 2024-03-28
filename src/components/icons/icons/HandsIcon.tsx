import { FC } from "react";

interface Props {
    color?: string;
    color1?: string;
    color2?: string;
    color3?: string;
}

const HandsIcon: FC<Props> = () => {
    return (
        <svg
            width="16"
            height="19"
            viewBox="0 0 16 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_1133_4285)">
                <path
                    d="M7.34433 9.41217V2.44067C7.34433 1.69104 7.95308 1.08301 8.70358 1.08301C9.45416 1.08301 10.0629 1.69104 10.0629 2.44067V9.41217V3.69004C10.0629 2.94042 10.6717 2.33238 11.4222 2.33238C12.1727 2.33238 12.7814 2.94042 12.7814 3.69004V9.41217H12.7897V6.52196C12.7897 5.82231 13.3985 5.24759 14.1491 5.24759C14.8912 5.24759 15.5 5.82231 15.5 6.52196V13.1686C15.5 15.709 13.3235 17.7497 10.6132 17.7497H9.4625C8.31166 17.7497 7.286 17.3665 6.47708 16.7918L0.906531 11.6444C0.36449 11.1363 0.36449 10.2618 0.906531 9.75367C1.44857 9.24559 2.26581 9.35384 2.80785 9.86192L4.62578 11.5111V4.43967C4.62578 3.74002 5.23454 3.1653 5.98506 3.1653C6.73558 3.1653 7.34433 3.74002 7.34433 4.43967V9.47884"
                    stroke="#41A1DA"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id="clip0_1133_4285">
                    <rect width="16" height="19" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default HandsIcon;