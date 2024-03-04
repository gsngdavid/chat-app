import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return (
    <button className="bg-gradient-to-bl from-primary p-2.5 rounded-full">
      {children}
    </button>
  );
}
