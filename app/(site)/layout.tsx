import Layoutsite from "@/src/components/Layout/Layoutsite";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <Layoutsite>{children}</Layoutsite>;
};

export default layout;
