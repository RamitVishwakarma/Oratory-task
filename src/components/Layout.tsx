import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-center">
      <div className="max-w-[108rem] w-full ">{children}</div>
    </div>
  );
};

export default Layout;
