import { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  // title의 값이 변경될 때에만 useEffect 되라.
  useEffect(updateTitle, [title]);
  return setTitle;
};

// titleUpdater("home") === useTitle("home") === setTitle("home")
function App() {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => {
    titleUpdater("home");
  }, 2000);
  return <div>hi</div>;
}

export default App;
