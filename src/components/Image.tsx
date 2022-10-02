import { FC, useRef } from "react";
import { CSSTransition } from "react-transition-group";

type Props = {
  src: string;
  alt: string;
};

const Image: FC<Props> = ({ src, alt }: Props) => {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      addEndListener={(node: HTMLElement, done: () => void) => {
        node.addEventListener("transitionend", done, false);
      }}
      in={true}
      nodeRef={nodeRef}
      unmountOnExit
      classNames="img"
    >
      <img
        ref={nodeRef}
        src={src}
        className="w-full aspect-[3/4] object-cover bg-gray-300"
        alt={alt}
      />
    </CSSTransition>
  );
};

export default Image;
