import { useContext } from 'react';
import DiaryItem from './DiaryItem';
import { DiaryStateContext } from './App';
import App from './App comments2';

const DiaryList = () => {
  const diaryList = useContext(DiaryStateContext);

  return (
    <div className='DiaryList'>
      <h2>๋๊ฐ ๋ด ๐ง๋ฅผ ๋จน์์๊น?</h2>
      <h4>{diaryList.length}๊ฐ์ ์ผ๊ธฐ๊ฐ ์์ต๋๋ค.</h4>
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
