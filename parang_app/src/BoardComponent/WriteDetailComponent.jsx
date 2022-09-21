import React from 'react'
import { Link } from 'react-router-dom'

function WriteDetailComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        관심등록 버튼  ex//꼭 가지않아도 알림창 처리
      </button>
      <br />
      피드 상세보기 페이지 입니다
    </div>
  )
}

export default WriteDetailComponent