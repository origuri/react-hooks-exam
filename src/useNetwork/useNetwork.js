import { useEffect, useState } from "react";

const useNetwork = (onChange) => {
  // navigator.online은 내가 만든 웹사이트의 온라인상태가 true인지 false인지 판단 가능.
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    if (typeof onChange === "function") {
      // 밑에서 만든  const handleNetwork = (online) => {} 의 online이 navigator.onLine
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};
