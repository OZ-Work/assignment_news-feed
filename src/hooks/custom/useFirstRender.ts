import { useRef } from "react";

export function useFirstRender() {
  const ref = useRef(true);
  ref.current = false;

  return { isFirstRender: ref.current };
}
