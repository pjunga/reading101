import Image from "next/image";
import Link from "next/link";

const recommendations = [
  {
    title: "The New Kid",
    type: "F",
    ar: "1.1-1.2",
    lexile: "30-60",
    words: "84",
    image:
      "https://images.unsplash.com/photo-1529653762956-b0a27278529b?auto=format&fit=crop&w=360&q=80",
  },
  {
    title: "Even Bread",
    type: "NF",
    ar: "1.1-1.2",
    lexile: "30-60",
    words: "84",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=360&q=80",
  },
  {
    title: "Horse Family",
    type: "NF",
    ar: "1.1-1.2",
    lexile: "30-60",
    words: "84",
    image:
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=360&q=80",
  },
];

export default function Home() {
  return (
    <div className="home-page">
      <div className="hero-card">
        <div className="hero-profile">
          <div className="avatar-bubble" aria-hidden>
            😊
          </div>
          <div>
            <div className="hero-name">김리동</div>
            <div className="hero-level">Lv. A</div>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-chip">
            <span className="stat-icon" aria-hidden>
              📚
            </span>
            <span className="stat-label">읽은 권수</span>
            <strong>0</strong>
          </div>
          <div className="stat-chip">
            <span className="stat-icon" aria-hidden>
              ⭐
            </span>
            <span className="stat-label">퀴즈 정답률</span>
            <strong>0%</strong>
          </div>
          <div className="stat-chip">
            <span className="stat-icon" aria-hidden>
              🎤
            </span>
            <span className="stat-label">AI음성인식</span>
            <strong>0</strong>
          </div>
          <div className="stat-chip">
            <span className="stat-icon" aria-hidden>
              ✅
            </span>
            <span className="stat-label">내용이해도</span>
            <strong>0</strong>
          </div>
        </div>
        <div className="hero-progress">
          <div className="progress-title">현재 레벨 진행도</div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: "0%" }} />
            <span className="progress-value">0%</span>
          </div>
          <div className="badge-hint">나의 뱃지 &gt;</div>
        </div>
      </div>

      <div className="content-layout">
        <div className="content-main">
          <section className="section-card">
            <div className="section-heading">
              <span className="section-icon" aria-hidden>
                📖
              </span>
              <h3>진행 중인 도서</h3>
              <Link href="/reading" className="pill-btn">
                더보기
              </Link>
            </div>
            <div className="panel">
              <div className="empty-state">
                <div className="empty-emoji" aria-hidden>
                  ✏️
                </div>
                <div className="empty-title">현재 학습을 진행 중인 도서가 없어요.</div>
                <div className="empty-text">새로운 책을 골라 지금 바로 독서를 시작해 보세요!</div>
              </div>
            </div>
          </section>

          <section className="section-card">
            <div className="section-heading">
              <span className="section-icon" aria-hidden>
                😊
              </span>
              <h3>학습을 마친 도서</h3>
              <Link href="/completed" className="pill-btn">
                더보기
              </Link>
            </div>
            <div className="panel">
              <div className="empty-state">
                <div className="empty-emoji" aria-hidden>
                  🌟
                </div>
                <div className="empty-title">아직 완료한 학습 도서가 없어요.</div>
                <div className="empty-text">지금부터 한 권을 끝까지 읽으며 학습을 시작해 볼까요?</div>
              </div>
            </div>
          </section>
        </div>

        <aside className="recommendation-panel">
          <div className="recommendation-header">
            <div className="recommendation-title">이 달의 추천도서</div>
            <span className="recommendation-icon" aria-hidden>
              🦎
            </span>
          </div>
          <div className="recommendation-list">
            {recommendations.map((book) => (
              <div key={book.title} className="book-card new">
                <div className="book-card__cover">
                  <Image src={book.image} alt={book.title} width={120} height={150} />
                </div>
                <div className="book-card__body">
                  <div className="book-card__top">
                    <div className="book-card__header">
                      <div className="book-card__title">{book.title}</div>
                      <span className="label label-blue">{book.type}</span>
                    </div>
                    <button className="book-cta solid">Read &gt;</button>
                  </div>
                  <div className="book-card__meta">
                    <div>
                      <strong>{book.ar}</strong>
                      <span>AR Score</span>
                    </div>
                    <div className="divider" />
                    <div>
                      <strong>{book.lexile}</strong>
                      <span>Lexile</span>
                    </div>
                    <div className="divider" />
                    <div>
                      <strong>{book.words}</strong>
                      <span>Word Count</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
