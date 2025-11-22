const catalog = [
  { title: "The History of the Marathon", status: "완독" },
  { title: "Madoop and The Mountain Mower", status: "완독 · 미완독" },
  { title: "Lucky and the Bloobygong", status: "완독" },
  { title: "Horsing Around", status: "완독 · AI Speak · 북퀴즈" },
  { title: "Sam Snoop and the Mystery of the Noisy Racing Car", status: "완독" },
  { title: "Bodybuilders", status: "완독" },
  { title: "For Sale - A Solar House", status: "완독 · AI Speak · 북퀴즈" },
  { title: "The Flying Machines", status: "완독 · 북퀴즈 · 미완독" },
  { title: "The Dumbo Octopus and the Vampire Squid", status: "완독 · AI Speak" },
];

const bookInfo = {
  title: "The Dumbo Octopus and the Vampire Squid",
  author: "Tracey Michele",
  level: "K",
  ar: "1.1-1.2",
  lexile: "10-30",
  pages: 18,
  words: 95,
  subject: "Social Studies",
  status: ["북퀴즈 미완독", "AI Speak"],
};

export default function ReadingPage() {
  return (
    <>
      <section className="section">
        <div className="section__title">
          <h2>READING</h2>
          <span className="section__meta">도서검색 · 필터 · 결과 · Book information</span>
        </div>

        <div className="input-row">
          <input className="input" placeholder="도서검색: 검색어를 입력하세요" />
          <input className="input" placeholder="Level: Starter / Explorer / Challenger / Master" />
          <input className="input" placeholder="Lexile: 10-30 · 30-60 · 100-200 · …" />
          <input className="input" placeholder="AR Score: 1.1-1.2 · 1.3-2.1 · …" />
          <input className="input" placeholder="F / NF: Fiction / Non-Fiction" />
        </div>

        <div className="grid-cols-2" style={{ alignItems: "start" }}>
          <div className="card" style={{ minHeight: 320 }}>
            <div className="card__title">검색 결과</div>
            <div className="subheading">상태 예시: 완독 / 미완독 / 북퀴즈 / AI Speak</div>
            <div className="grid" style={{ marginTop: 10 }}>
              {catalog.map((book) => (
                <div key={book.title} className="card">
                  <div className="card__title">{book.title}</div>
                  <div className="card__desc">{book.status}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="card" style={{ minHeight: 320 }}>
            <div className="card__title">Book information</div>
            <div className="card__desc">{bookInfo.title}</div>
            <div className="chips">
              <span className="chip">F/NF: Non-Fiction</span>
              <span className="chip">Reading Level K</span>
              <span className="chip">AR {bookInfo.ar}</span>
              <span className="chip">Lexile {bookInfo.lexile}</span>
              <span className="chip">Word Count {bookInfo.words}</span>
              <span className="chip">Page Count {bookInfo.pages}</span>
              <span className="chip">Subject {bookInfo.subject}</span>
            </div>
            <div className="pillset">
              {bookInfo.status.map((s) => (
                <span key={s} className="tag tag--info">
                  {s}
                </span>
              ))}
            </div>
            <div className="pillset">
              <span className="btn">E-Book 학습하기</span>
              <span className="btn btn--ghost">Book Quiz 학습하기</span>
              <span className="btn btn--ghost">AI Speak 학습하기</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
