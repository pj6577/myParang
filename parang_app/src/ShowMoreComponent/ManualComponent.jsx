import React from 'react'
import { Link } from 'react-router-dom'

function ManualComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      사용 설명서 페이지 입니다
    </div>
  )
}

export default ManualComponent