import {useEffect} from "react";

export function useDarkenBackground(isOpen) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('darken-bg')
    } else {
      document.body.classList.remove('darken-bg')
    }

    return () => document.body.classList.remove('darken-bg')
  }, [isOpen]);
}