"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const auth = localStorage.get("token") ? true : false;

    if (!auth) {
      console.log("+++++++++++++++++++++++++++++++++++++++++++=")
      redirect("/");
    }

    return <Component {...props} />;
  };
}
