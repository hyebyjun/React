import React, { useEffect, useState, useRef } from 'react';
// ๐ js ํ์ผ์ ํ๊ณ  ํ๊ณ  ์ฌ๊ธฐ๊น์ง ์ค๋ฉฐ๋ค์ด์ค๋๋ค..

const DiaryItem = ({
  onEdit,
  onRemove,
  id,
  author,
  content,
  emotion,
  created_date,
}) => {
  useEffect(() => {
    console.log(`${id}๋ฒ ์์ดํ ๋ ๋`);
  });

  const [isEdit, setIsEdit] = useState(false);
  // ์์ ์ค์ด๋ ์๋๋ boolean์ผ๋ก ๊ฐ์ ๋ณด๊ดํด๋์ state?
  // state ๋ง๋ค์์ผ๋ฉด ์ด์  ํ ๊ธ ํจ์๋ฅผ ๋ง๋ค์ด๋ด๋๋ค..

  const toggleIsEdit = () => setIsEdit(!isEdit); // ์ด ํจ์๊ฐ ํธ์ถ์ด ๋๋ฉด isEdit์ ๋ฐ์ ์์ผ๋ฒ๋ฆฌ๋.. ์ฉ..

  const [localContent, setLocalContent] = useState(content);
  // ์์ ์ฐฝ์์ ์ด๋ฆด contents์ ๊ธฐ๋ณธ๊ฐ(useState(์๊ฑฐ))์ ์ฐ ์ปจํ์ธ ๋ก ํด๋๋ฉด,
  // ์์  ํด๋ฆญํด์ ์ด๋ฆด ๋ ์ด์  ์จ๋ ๊ทธ ๋ฐ์ดํฐ ๊ณ  ๋๋ก ๋์ค๊ฒ ์ฅฌ?

  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}๋ฒ ์ผ๊ธฐ๋ฅผ ์ ๋ง ์ญ์ ํ์๊ฒ ์ต๋๊น?`)) {
      onRemove(id); // ํ์ธ์ ๋๋ฅด๋ฉด id๋ฅผ ์ ๋ฌ..
    }
  };

  const handleQuitEdit = () => {
    // ์์  ์ทจ์ ๋๋ฅผ ๋ ์คํ๋  ํจ์
    setIsEdit(false); // ํธ์ง ์ํ๋ฅผ false๋ก ๋๋ฆด๊ฑฐ๊ณ 
    setLocalContent(content); // ๋ด๊ฐ ์๋ ฅํด๋จ๋ ์์ ๋ด์ฉ๋ ๊ฑ ์๋ ๋ด์ฉ์ผ๋ก ๋ณต์
  };

  // ๋๋ง์ CRUD ์ค update(์์ )์๋๋ค..
  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    // if (window.confirm(`${id}๋ฒ ์ผ๊ธฐ๋ฅผ ์์ ํ์๊ฒ ์ต๋๊น?`)) {
    //   onEdit(id, localContent); // ์ ๋ ๊ทธ๋ฅ ์ ๋ฌผ์ด๋ณผ๋์..
    //   toggleIsEdit();
    // }

    onEdit(id, localContent); // ์ฌ๊ธฐ๊น์ง๋ ์์ ์ฐฝ ์๋ ฅ ๋ฐ์ดํฐ๋ฅผ ๋ฐ๊ฟ์น๊ธฐํด์ฃผ์ง๋ง
    toggleIsEdit(); // ์๊ธฐ๊น์ง ์คํ๋ผ์ผ ์์ ์ฐฝ๋ ๋ซํ๊ณ , ๋ด์ฉ๋ฌผ๋ ๋ณด์ฌ์ฃผ๋ ํ๋ฉด์ผ๋ก ๋ฐ๋๋ค!!
  };

  return (
    <div className='DiaryItem'>
      <div className='info'>
        <span>
          ยซ ์์ฑ์ : {author} ๐ ์ค๋์ ๋ณ์  : {emotion} ยป
        </span>
        <br />
        <span className='date'>{new Date(created_date).toLocaleString()}</span>
      </div>
      {/* <div className='content'>{content}</div> */}
      <div className='content'>
        {isEdit ? (
          <>
            <textarea
              ref={localContentInput}
              value={localContent}
              onChange={(event) => {
                setLocalContent(event.target.value);
              }}
            />
          </>
        ) : (
          <>{content}</>
        )}
        {/* ์ ์ฌ๊ธฐ์ ์ผํญ์ฐ์ฐ์๋ก ๊น๋์ฒ๋ฆฌ๊ฐ ๋๋๊ตฌ๋.. ๊ฐํ.. */}
      </div>
      {isEdit ? (
        <>
          <button onClick={handleEdit}>์ ์ฅ</button>
          <button onClick={handleQuitEdit}>์ทจ์</button>
        </>
      ) : (
        <>
          <button onClick={toggleIsEdit}>์์ </button>
          {/* ์ด์  ์์ ํ๊ธฐ๋ฅผ ๋๋ฅด๋ฉด isEdit์ state๊ฐ
      ๊ธฐ๋ณธ๊ฐ false์์ true๋ก, ์ดํ์ ๋ ๋ฐ๋๋ก ๋ฐ์ ์ฒ๋ฆฌ ๋จนํ
      ์ด์  isEdit์ด true์ผ๋ ์์ ์ฐฝ? ๋์ค๋๋ก ํ๋ ํจ์๋ฅผ ์ง๋ณผ๊ฑฐ์์ */}
          <button onClick={handleRemove}>์ญ์ </button>
        </>
      )}
    </div>
  );
};

export default React.memo(DiaryItem);
