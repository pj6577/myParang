import React from 'react'
import { Link } from 'react-router-dom'

function MyLikeInfoComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        <Link to='/mylikeinfoupdate'>관심 정보 수정하기</Link>
      </button>
      관심등록 정보 페이지 입니다
      <br />
      수많은 관심들...
    </div>
  )
}

export default MyLikeInfoComponent