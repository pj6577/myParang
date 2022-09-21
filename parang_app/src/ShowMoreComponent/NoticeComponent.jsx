import React from 'react'
import { Link } from 'react-router-dom'

function NoticeComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      공지사항 페이지 입니다
    </div>
  )
}

export default NoticeComponent