import { useEffect, useRef } from "react";

// onClick 함수를 파라미터로 갖는다.
const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    // 유효성 체크
    if (typeof onClick !== "function") {
      return;
    }
    // 유효한 태그에 ref를 걸었으면 click 이벤트 리스너를 생성해준다.
    if (element.current) {
      // mount때 생긴 이벤트 리스너를 unMount때 같이 삭제시켜줘야 함.
      element.current.addEventListener("click", onClick);
    }
    // cleanup 코드 작성
    // 여기서 함수를 호출하면 unMount되면서 실행됨.
    return () => {
      // 마찬가지로 태그가 유효한지 확인 후에 실행.
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  // 여기서 ref한 element를 리턴하기 때문에 title === useRef()
  return element;
};
