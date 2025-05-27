import type { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="container max-w-[1800px] w-full mx-auto px-8">
      {children}
    </div>
  );
};

export default Container;
