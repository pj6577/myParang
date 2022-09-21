import React from 'react'
import { Link } from 'react-router-dom'

function MyPageComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      마이 페이지 입니다
      <button>
        <Link to='/accountupdate'>회원 정보 수정</Link>
      </button>
      <button>
        <Link to='/inquiryhistory'>문의 내역</Link>
      </button>
      <button>
        <Link to='/mylikeinfo'>관심등록 정보 페이지</Link>
      </button>
      <button>
        <Link to='/'>회원 탈퇴</Link>
      </button>
    </div>
  )
}

export default MyPageComponent