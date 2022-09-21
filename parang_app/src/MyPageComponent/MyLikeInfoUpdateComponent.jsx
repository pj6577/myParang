import React from 'react'
import { Link } from 'react-router-dom'

function MyLikeInfoUpdateComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        <Link to='/mylikeinfo'>수정 완료</Link>
      </button>
      관심 정보 수정 페이지 입니다
    </div>
  )
}

export default MyLikeInfoUpdateComponent