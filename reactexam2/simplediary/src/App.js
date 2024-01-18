import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

// https://jsonplaceholder.typicode.com/comments api 호출

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

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());
    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime(),
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []); //Mount되는 시점에 getData

  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]); // 가장 최근에 작성한 newItem을 올리고 그다음 좌악
  }, []);

  const onRemove = useCallback((targetId) => {
    // console.log(`${targetId}가 삭제되었습니다.`);
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  });

  const getDiaryAnalysis = useMemo(() => {
    // console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;
  // 이 부분 함수 호출이 아닌 값의 대입

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <div>전체 쓰레기 : {data.length}</div>
      <div>좋은 쓰레기 : {goodCount}</div>
      <div>나쁜 쓰레기 : {badCount}</div>
      <div>좋은 쓰레기 비율 : {goodRatio}</div>
      <DiaryList onEdit={onEdit} diaryList={data} onRemove={onRemove} />
    </div> //2. list 같은 경우에는 값이 바뀌면 자연스레 리렌더링되기에 그대로 data를 보낸다.
  );
}

export default App;
