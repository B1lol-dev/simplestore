import LoaderFull from "@/components/loaders/LoaderFull";
import React from "react";

export const Suspense = ({ children }: { children: React.ReactNode }) => {
  return <React.Suspense fallback={<LoaderFull />}>{children}</React.Suspense>;
};
