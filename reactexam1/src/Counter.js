import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = ({ initialValue }) => {
  // 모든 동적인 데이터들을 상태로 생각해보자.
  // 현재는 0에서 출발하여 +=1인 h2가 상태임

  const [count, setCount] = useState(initialValue);
  // count는 상태의 값, setCount는 Count를 변화시키는 상태 변화 함수
  // 인자로 넘겨주는 0값은 초기값으로 활용

  const onIncrease = () => {
    setCount(count + 1);
  };

  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

Counter.defaultProps = {
  initialValue: 0,
};

export default Counter;
