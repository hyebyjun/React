import { useContext } from 'react';
import DiaryItem from './DiaryItem';
import { DiaryStateContext } from './App';
import App from './App comments2';

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className='DiaryList'>
      <h2>누가 내 🧀를 먹었을까?</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};
export default DiaryList;
