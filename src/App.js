import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  //
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("home");
  }, 2000);
  return <div>hi</div>;
}

export default App;
