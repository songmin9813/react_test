import React, { useRef, useState } from "react";

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });
  //각 state에 대한 같은 문자열 정보를 state로 묶어둔 형식
  // SetState 상태가 객체인 경우 콜백 함수로 전달하는 형태 역시 같은 형식의 객체여야 한다.

  const handleChangeState = (e) => {
    setState({
      ...state, //author: this.author 느낌으로 spreading 좌악
      [e.target.name]: e.target.value,
      //spread 키워드 가장 아래에 실질적으로 바뀐 값만 입력하면 된다.
    });
  };
  //공통된 부분 역시 하나의 이벤트 함수로 관리해보는 습관.

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // alert("작성자는 최소 1글자 이상 입력해주세요.");
      //focus
      authorInput.current.focus();
      return;
    }
    if (state.content.length < 5) {
      // alert("콘텐츠의 길이는 최소 5글자 이상 입력해주세요.");
      //focus
      contentInput.current.focus();
      return;
    }
    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 쓰레기</h2>
      <div>
        <input
          ref={authorInput}
          name="author"
          value={state.author}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content}
          onChange={handleChangeState}
        />
      </div>
      <div>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>쓰레기 버리기!</button>
      </div>
    </div>
  );
};

export default React.memo(DiaryEditor);
