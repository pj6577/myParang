import React from 'react'
import { Link } from 'react-router-dom'

function InquiryHistoryComponent() {
  return (
    <div>
      <button>
        <Link to='/'>홈으로 가기</Link>
      </button>
      문의 내역 페이지 입니다<br />

      수많은 문의 리스트...
    </div>
  )
}

export default InquiryHistoryComponent