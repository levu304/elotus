import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Navbar: FC<Props> = ({ children }: Props) => {
  return (
    <nav className="w-full">
      <div className="container">{children}</div>
    </nav>
  );
};

export default Navbar;
