import { Suspense } from "react";
import Order from "./Order";

const Page = () => {
  return (
    <Suspense>
      <Order />
    </Suspense>
  );
};

export default Page;
