import { useEffect, useState } from "react";

const useScroll = () => {
  // 오브젝트로 state를 세팅
  const [state, setState] = useState({
    x: 0,
    y: 0,
  });

  const onScroll = () => {
    // window.scrollY : y축의 위치를 알려주는 함수
    console.log("y축 -> ", window.scrollY);
    // state가 객체이니까 이렇게 넣어줘야 함.
    setState({ y: window.scrollY, x: window.scrollX });
  };

  useEffect(() => {
    // scroll의 이벤트를 감지하는 것.
    window.addEventListener("scroll", onScroll);
    // clean up
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return state;
};

function App() {
  // return이 state이고 그 안에 객체로 x, y값이 있기 때문에 분할 할당 구조로 가져올 수 있음.
  const { y } = useScroll();
  return (
    <div style={{ height: "1000vh" }}>
      <h1 style={{ position: "fixed", color: y > 100 ? "blue" : "red" }}>h2</h1>
    </div>
  );
}

export default App;
