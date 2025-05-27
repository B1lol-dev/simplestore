import type { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`container max-w-[1800px] w-full mx-auto px-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
