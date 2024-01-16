const DiaryItem = ({
  author,
  content,
  created_date,
  emotion,
  id,
  onDelete,
}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>
          작성자 : {author} | 감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
      <button
        onClick={() => {
          if (window.confirm(`${id}번 쓰레기를 삭제할까요?`)) {
            onDelete(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  ); //key로 항상 고유한 값을 가지는 id를 배정해주어야 함
  // idx값을 임시로 고유값으로 할 수 있지만 잠재적인 문제가 있어 고유값 기입을 추천
};
export default DiaryItem;
