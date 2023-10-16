import { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    // 구조 분할 할당 문법, event에 있는 clientY를 바로 가져옴.
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") return;
    document.addEventListener("mouseleave", handle);
    // cleanup
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
