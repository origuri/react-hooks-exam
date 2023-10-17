import useFetch from "./useFetch/useFetch";

function App() {
  const url = "https://yts.mx/api/v2/list_";
  const { apiData, loading, error } = useFetch(url);
  console.log(
    `로딩 다되면 false임 -> ${loading}, error 나면 뭐 뜰꺼임 -> ${error}`
  );
  return (
    <div>
      <h1>h1</h1>
      <div>
        <ul>
          {/* 순차적 접근을 해야하는 이유는 리액트가 api 데이터를 받아오기도 전에 접근하려고 해서 에러가 발생하기 때문 */}
          {apiData && apiData.data && apiData.data.movies
            ? apiData.data.movies.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))
            : []}
        </ul>
      </div>
    </div>
  );
}

export default App;
