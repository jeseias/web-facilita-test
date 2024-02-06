import { useState } from "react";

export const useOpen = () => {
  const [isOpen, setIsOpen] = useState(false);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen((prevState) => !prevState);

  return {
    toggle,
    isOpen,
    close,
    open,
    setIsOpen,
  };
};
