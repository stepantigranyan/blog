import { type FC, ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper: FC<WrapperProps> = ({ children }) => {
  return (
    <div className="w-full px-5 sm:w-lg sm:mx-auto md:w-2xl lg:w-4xl xl:w-6xl">
      {children}
    </div>
  );
};

export default Wrapper;
