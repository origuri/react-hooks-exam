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

function App() {
  const deleteWorld = () => {
    console.log("delete the world");
  };
  // 함수 자체가 리턴되기 때문에 window.confirm이 실행됨.
  const confirmDelete = useConfirm("real?", deleteWorld);
  return (
    <div>
      <button onClick={confirmDelete}>Delete th world</button>
    </div>
  );
}

export default App;
