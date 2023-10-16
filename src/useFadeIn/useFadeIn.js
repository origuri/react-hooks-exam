import { useEffect, useRef } from "react";

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (typeof duration !== "number" || typeof delay !== "number") return;
    const { current } = element;
    // opacity : 불투명도를 나타냄, 0은 투명 0.5는 반투명 1은 불투명
    // transition은 부드러운 애니메이션을 실행시켜줌.
    // opacity를 n초에 걸쳐서 실행, ease-in-out은 애니메이션의 지연시간을 나타냄
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
  }, []);
  return {
    ref: element,
    style: { opacity: 0 },
  };
};
