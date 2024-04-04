import { SVGProps } from "react";

interface Props extends SVGProps<SVGElement> {}

export default function StatusIcon({ className, stroke }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          opacity="0.4"
          d="M2.44922 14.9702C3.51922 18.4102 6.39923 21.0602 9.97923 21.7902"
          stroke={stroke ? stroke : "#292D32"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M2.05078 10.98C2.56078 5.93 6.82078 2 12.0008 2C17.1808 2 21.4408 5.94 21.9508 10.98"
          stroke={stroke ? stroke : "#292D32"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M14.0098 21.8C17.5798 21.07 20.4498 18.45 21.5398 15.02"
          stroke={stroke ? stroke : "#292D32"}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </g>
    </svg>
  );
}
