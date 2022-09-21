import React from 'react'
import { Link } from 'react-router-dom'

function InquiryComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      <button>
        <Link to='/inquiryhistory'>문의 하기</Link>
      </button>
      서비스 문의 페이지 입니다
    </div>
  )
}

export default InquiryComponent