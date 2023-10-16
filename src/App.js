import { useState } from "react";

const content = [
  {
    tab: "섹션 1",
    contents: "내용 1",
  },
  {
    tab: "섹션 2",
    contents: "내용 2",
  },
];

const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // allTabs가 없거나 배열이 아니면 강제로 죽이기
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// {}는 리턴 객체을 바로 가져올 수 있게 함
function App() {
  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((item, index) => (
        <button key={index} onClick={(index) => changeItem}>
          {item.tab}
        </button>
      ))}
      <div>{currentItem.contents}</div>
    </div>
  );
}

export default App;
