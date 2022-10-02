import { FC, memo, ReactNode, MouseEventHandler } from "react";

type Props = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  isActive: boolean;
};

const TabButton: FC<Props> = ({
  children,
  isActive = false,
  onClick,
}: Props) => {
  return (
    <button
      className={`border uppercase ${
        isActive ? "bg-blue-500 border-blue-600 text-white" : ""
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default memo(TabButton);
