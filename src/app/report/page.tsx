const monthly = [
  { month: "2026-02-21", title: "Gertrude McClatter Finds Some Friends", quiz: "100%", speak: "A" },
  { month: "2026-02-21", title: "Caught in a Food Web", quiz: "100%", speak: "A" },
  { month: "2026-02-21", title: "Gerard Giraffe: Private Investigator", quiz: "100%", speak: "A" },
  { month: "2026-02-21", title: "Breads, Grains and Rice", quiz: "100%", speak: "A" },
  { month: "2026-02-21", title: "Make a Shake & a Bakeless Cake", quiz: "75%", speak: "A" },
  { month: "2026-02-21", title: "Sam Snoop and the Mystery of the Noisy Racing Car", quiz: "50%", speak: "A" },
  { month: "2026-02-21", title: "Bodybuilders", quiz: "100%", speak: "A" },
  { month: "2026-02-21", title: "Robots at Work and Play", quiz: "100%", speak: "A" },
];

const totals = [
  { label: "학습일수", value: "24", sub: "완독+북퀴즈+AI Speak 완료" },
  { label: "총 권 수", value: "24", sub: "완독 + 학습 완료 권 수" },
  { label: "총 페이지 수", value: "342", sub: "E-Book 완독 합계" },
  { label: "학습한 단어 수", value: "250", sub: "Word Preview 합계" },
  { label: "북퀴즈 정답률", value: "84%", sub: "모든 학습 결과 반영" },
];

export default function ReportPage() {
  return (
    <>
      <section className="section">
        <div className="section__title">
          <h2>REPORT</h2>
          <span className="section__meta">누적 지표 · 월간 학습 결과</span>
        </div>
        <div className="grid">
          {totals.map((item) => (
            <div key={item.label} className="card">
              <div className="card__title">{item.label}</div>
              <div className="card__desc">{item.sub}</div>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section__title">
          <h2>월간 학습 결과</h2>
          <span className="section__meta">월 선택 후 리스트 · 결과 보기</span>
        </div>
        <div className="list">
          {monthly.map((item, idx) => (
            <div key={`${item.title}-${idx}`} className="list__row">
              <div>
                <div className="card__title">
                  {item.title}
                </div>
                <div className="card__desc">
                  학습일 {item.month} · 북퀴즈 정답률 {item.quiz} · AI 음성평가 {item.speak}
                </div>
              </div>
              <div className="pillset">
                <span className="tag tag--ok">결과 보기</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
