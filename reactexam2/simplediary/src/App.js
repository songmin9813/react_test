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

  const dataId = useRef(0);

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

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
