export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  // allTabs가 없거나 배열이 아니면 강제로 죽이기
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    // 객체 안에 변수를 선언하고 함수를 할당하여 리턴한 것.
    // 그럼 useTabs는 changeItem을 리턴함.
    // 결국 useTabs === changeItem === setCurrnetIndex
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

// {}는 리턴 객체을 바로 가져올 수 있게 함
// useTabs === changeItem === setCurrnetIndex 이므로
// changeItem(index) === setCurrentIndex(index)
// function App() {
//   const { currentItem, changeItem } = useTabs(0, content);
//   return (
//     <div>
//       {content.map((item, index) => (
//         <button key={index} onClick={() => changeItem(index)}>
//           {item.tab}
//         </button>
//       ))}
//       <div>{currentItem.contents}</div>
//     </div>
//   );
// }
