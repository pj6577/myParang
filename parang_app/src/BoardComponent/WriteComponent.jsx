import React from 'react'
import { Link } from 'react-router-dom'

function WriteComponent() {
  return (
    <div>
      <div>
        <button>
          <Link to='/'>홈으로 가기</Link>
        </button>
        <button>
          <Link to='/board'>글 쓰기</Link>
        </button>
        피드 등록 페이지 입니다
      </div>
    </div>
  )
}

export default WriteComponent