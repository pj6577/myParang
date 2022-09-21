import React from 'react'
import { Link } from 'react-router-dom'

function BoardComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        <Link to='/write'>피드 등록 하기 </Link>
      </button>
      <button>
        <Link to='/writedetail'>피드 상세보기</Link>
      </button>
      <br />
      수많은 게시글들...
      <br />
      게시판 페이지 입니다.
    </div>
  )
}

export default BoardComponent