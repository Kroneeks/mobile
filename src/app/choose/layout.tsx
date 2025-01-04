import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col">
      {children}
      <button>кружка с именем</button>
      <button>кружка с картинкой</button>
    </MaxWidthWrapper>
  );
};

export default Layout;
