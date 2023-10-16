export const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  // title의 값이 변경될 때에만 useEffect 되라.
  useEffect(updateTitle, [title]);
  return setTitle;
};
