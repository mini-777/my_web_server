import React from 'react';
import { Link } from 'react-router-dom';

function DetailPage() {
  return (
    <div>
      <Link to='/'>
        <h1>상세 이력서</h1>
      </Link>
      <p>프론트엔드 개발자</p>
      <p>여러가지 프로젝트 경험이 있음</p>
      <p>최근엔 디자인에 관심이 있음</p>
    </div>
  );
}

export default DetailPage;
