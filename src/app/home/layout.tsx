import React from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const HomeLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
