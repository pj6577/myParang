import React from 'react'
import { Link } from 'react-router-dom'

function ShowMoreComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        <Link to='/tabooinfo'>금어기 정보</Link>
      </button>
      <button>
        <Link to='/tideinfo'>물 때 표</Link>
      </button>
      <button>
        <Link to='/manual'>사용 설명서</Link>
      </button>
      <button>
        <Link to='/inquiry'>서비스 문의</Link>
      </button>
      <button>
        <Link to='/notice'>공지 사항</Link>
      </button>
      <br />
      더보기 페이지 입니다
    </div>
  )
}

export default ShowMoreComponent