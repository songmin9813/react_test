import React, { useState } from "react";
// 객체 컴포넌트의 깊은 비교를 구현하여 객체 최적화를 시켜주는 강화 컴포넌트 기법

const CounterA = React.memo(({ count }) => {
  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  return <div>{obj.count}</div>;
});

const areEqual = (prevProps, nextProps) => {
  if (prevProps.obj.count === nextProps.obj.count) return true;
  return false;
};

const OptimizeCounterB = React.memo(CounterB, areEqual);

const OptimizeTestTwo = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>counter a</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>a button</button>
      </div>
      <div>
        <h2>counter b</h2>
        <OptimizeCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>b button</button>
      </div>
    </div>
  );
};

export default OptimizeTestTwo;
