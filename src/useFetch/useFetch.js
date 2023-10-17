import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [fetchData, setFetchData] = useState({
    loading: true,
    apiData: {}, // api는 보통 객체니깐.
    error: null,
  });

  const getFetch = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("url 넣은거 맞니?");
      }
      const jsonData = await response.json();
      console.log(jsonData);
      // {...state, loading:false, data:data}
      // 객체 스프레드 복사하고 loading, data값을 변경시킴.
      setFetchData({
        ...fetchData,
        loading: false,
        apiData: jsonData,
      });
    } catch (error) {
      const err = `${error} // url 넣은 거 마즘?`;
      console.error("Error fetching data:", err);
      setFetchData({ ...fetchData, loading: false, error: err });
    }
  };

  useEffect(() => {
    getFetch();
  }, []);

  return fetchData;
};

export default useFetch;
