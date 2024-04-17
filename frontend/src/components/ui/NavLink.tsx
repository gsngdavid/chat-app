import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  link: string;
}

export default function NavLink({ link, children }: Props) {
  return (
    <Link href={link} className="">
      <div
        className="rounded-full"
        style={{
          boxShadow: "rgba(255, 255, 255, 0.06) 0px 2px 4px 0px inset",
        }}
      >
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 8px" }}
          className="rounded-full p-3"
        >
          {children}
        </div>
      </div>
    </Link>
  );
}
