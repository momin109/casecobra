import Steps from "@/components/Steps";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWidthWrapper>
  );
};

export default layout;
