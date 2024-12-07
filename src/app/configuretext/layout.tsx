import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import StepsText from "@/components/StepsText";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      <StepsText />
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
