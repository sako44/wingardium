import { ReactNode } from "react";
type ContainerProps = {
  children: ReactNode;
  clas?: string;
};

const Container = ({ children, clas }: ContainerProps) => {
  return (
    <div
      className={`${clas}"  max-w-7xl 2xl:max-w-[1500px] 3xl:max-w-[110rem] mx-auto px-4 lg:px-16 xl:px-20 2xl:px-28 "`}
    >
      {children}
    </div>
  );
};

export default Container;
