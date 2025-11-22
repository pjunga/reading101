const profileStates = [
  { title: "로그인 전", note: "비밀번호 재확인 모달", badge: "비밀번호 재입력" },
  { title: "로그인 후", note: "정보 수정 적용 · 이전 탭으로 복귀", badge: "정보 수정" },
  { title: "아바타 선택", note: "MVP 제외 · Apply 비활성 → 활성", badge: "MVP 제외" },
];

export default function ProfilePage() {
  return (
    <>
      <section className="section">
        <div className="section__title">
          <h2>정보수정</h2>
          <span className="section__meta">비밀번호 변경 · 연락처 · 아바타(MVP 제외)</span>
        </div>
        <div className="grid">
          {profileStates.map((state) => (
            <div key={state.title} className="card">
              <div className="card__title">{state.title}</div>
              <div className="card__desc">{state.note}</div>
              <div className="pillset">
                <span className="tag tag--info">{state.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__title">
          <h2>프로필 폼</h2>
          <span className="section__meta">입력 검증 · 적용/취소 버튼</span>
        </div>
        <div className="stacked">
          <div className="list__row">
            <div>
              <div className="card__title">이름 / 아이디</div>
              <div className="card__desc">배재용 / jb9308</div>
            </div>
            <span className="tag tag--info">수정 불가</span>
          </div>
          <div className="list__row">
            <div>
              <div className="card__title">비밀번호 변경</div>
              <div className="card__desc">영문/숫자/특수문자 2종 이상 · 8~16자</div>
            </div>
            <span className="tag tag--warn">재입력 필요</span>
          </div>
          <div className="list__row">
            <div>
              <div className="card__title">이메일 / 전화번호</div>
              <div className="card__desc">이메일, 휴대폰 입력 · 하이픈 분리</div>
            </div>
            <span className="tag tag--ok">저장 가능</span>
          </div>
          <div className="list__row">
            <div>
              <div className="card__title">버튼</div>
              <div className="card__desc">취소 → 이전 탭, 정보수정 → 저장</div>
            </div>
            <div className="pillset">
              <span className="tag tag--info">취소</span>
              <span className="tag tag--ok">정보수정</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
