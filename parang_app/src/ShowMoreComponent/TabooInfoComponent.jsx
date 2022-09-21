import React from 'react'
import { Link } from 'react-router-dom'

function TabooInfoComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      금어기 정보 페이지 입니다
      <br />
      공지사항 ...
    </div>
  )
}

export default TabooInfoComponent