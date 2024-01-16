import DiaryItem from "./DiaryItem";

const DiaryList = ({ onEdit, diaryList, onRemove }) => {
  return (
    <div className="DiaryList">
      <h2>쓰레기 리스트</h2>
      <h4>{diaryList.length}개의 쓰레기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;
