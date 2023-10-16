// message와 callback 함수를 파라미터로 받고
const useConfirm = (message, callback) => {
  if (typeof callback !== "function" || typeof message !== "string") {
    return;
  }
  // 안에서 함수가 실행됨. window.confirm 실행시키고 callback 함수를 실행시킴
  const confirmAction = () => {
    if (window.confirm(message)) {
      callback();
    }
  };
  return confirmAction;
};
