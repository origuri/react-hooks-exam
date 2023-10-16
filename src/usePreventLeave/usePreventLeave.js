// api의 응답이 완료되지 않은 상태에서 user가 창을 닫으려고 할 때
// 닫지 못하게 하는 방어 장치
const usePreventLeave = () => {
  const listener = (event) => {
    // preventDefault beforeunload의 이벤트에서 경고창을 나타내주는 함수
    event.preventDefault();
    event.returnValue = "";
  };
  // 웹 페이지가 닫히거나 다른 페이지로 이동 되기 전에 실행되는 이벤트
  const enablePrevent = () => {
    window.addEventListener("beforeunload", listener);
  };
  const disablePrevent = () => {
    // 이벤트를 삭제해서 바로 나갈 수 있게 만듬
    window.removeEventListener("beforeunload", listener);
  };
  return { enablePrevent, disablePrevent };
};
