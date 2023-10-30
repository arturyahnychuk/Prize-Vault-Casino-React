import { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="linear-main">
      <div className="container">{children}</div>
    </div>
  );
}

export default PageLayout;
