import React, { useState } from "react";
// React.memo를 이용한 강화 컴포넌트 최적화 예제

const TextView = React.memo(({ text }) => {
  return <div>{text}</div>;
}); // React.memo로 강화된 컴포넌트 1

const CountView = React.memo(({ count }) => {
  return <div>{count}</div>;
}); // React.memo로 강화된 컴포넌트 2

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>count</h2>
        <CountView count={count}></CountView>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text}></TextView>
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div>
    </div>
  );
};

export default OptimizeTest;
