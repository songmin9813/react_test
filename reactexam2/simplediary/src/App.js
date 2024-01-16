import { useRef, useState } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

/*const dummyList = [
  {
    id: 1,
    author: "메롱",
    content: "hello hi",
    emotion: 5,
    created_date: new Date().getTime(), //현재 시간을 기준으로 생성
  },
  {
    id: 2,
    author: "메롱123",
    content: "hedfaafd hi",
    emotion: 2,
    created_date: new Date().getTime(), //현재 시간을 기준으로 생성
  },
  {
    id: 3,
    author: "메롱123123",
    content: "helafdfadf hi",
    emotion: 5,
    created_date: new Date().getTime(), //현재 시간을 기준으로 생성
  },
];*/
function App() {
  const [data, setData] = useState([]);
  // 1. editor와 list가 함께 사용할 diary 정보 data를 가지고 있다.
  // 그 일기의 초기값은 빈 배열이고 일기의 상태 변화 시 작동하는 setData 함수 존재

  const dataId = useRef(1);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]); // 가장 최근에 작성한 newItem을 올리고 그다음 좌악
  };

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다.`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove} />
    </div> //2. list 같은 경우에는 값이 바뀌면 자연스레 리렌더링되기에 그대로 data를 보낸다.
  );
}

export default App;
