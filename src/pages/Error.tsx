import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ErrorBoundary: FC<Props> = ({ children }: Props) => {
  return <>{children}</>;
};

export default ErrorBoundary;
