type ResultGrade = "A" | "B" | "C" | "D";

type ResultItem = {
  title: string;
  date: string;
  quiz: string;
  grade: ResultGrade;
  colors: [string, string];
};

const results: ResultItem[] = [
  {
    title: "Gertrude McClatter Finds Some Friends",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f9c3ad", "#f07e6a"],
  },
  {
    title: "Breads, Grains and Rice",
    date: "2026-02-21",
    quiz: "100%",
    grade: "A",
    colors: ["#f7e6c7", "#e7b76a"],
  },
  {
    title: "Make a Shake & a Bakeless Cake",
    date: "2026-02-21",
    quiz: "75%",
    grade: "B",
    colors: ["#e1d6ed", "#9a86c9"],
  },
  {
    title: "Sam Snoop and the Mystery of the Noisy Racing Car",
    date: "2026-02-21",
    quiz: "50%",
    grade: "C",
    colors: ["#d7e7f8", "#7db8e3"],
  },
  {
    title: "Gerard Giraffe: Private Investigator",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f6d8c5", "#f7a16a"],
  },
  {
    title: "Caught in a Food Web",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f1c3d9", "#f4698b"],
  },
  {
    title: "Bodybuilders",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f3d0c3", "#d66c47"],
  },
  {
    title: "The Worzzle",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#e0e6ff", "#8fa4f4"],
  },
  {
    title: "Matter Matters",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#d8ecf7", "#63b0e5"],
  },
  {
    title: "For Sale - A Solar House",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#e7e9f0", "#8aa6d6"],
  },
  {
    title: "Marathon Race",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f5e3d9", "#f2ae6d"],
  },
  {
    title: "Robots at Work and Play",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#e1d8f4", "#b899f0"],
  },
  {
    title: "Record-Breaking Dinosaurs",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#e3f3c8", "#8dc44b"],
  },
  {
    title: "Creature Teacher",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f7d6b4", "#e47b3b"],
  },
  {
    title: "Inventions That Help Us at Home",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#d8e6ff", "#8fa4f4"],
  },
  {
    title: "Dumbo Octopus",
    date: "2026-02-21",
    quiz: "10%",
    grade: "D",
    colors: ["#f3d0c3", "#f08a5d"],
  },
];

function GradePill({ grade }: { grade: ResultGrade }) {
  return <span className={`grade-pill grade-${grade}`}>{grade}</span>;
}

export default function CompletedPage() {
  return (
    <div className="results-page">
      <div className="results-header">
        <div className="results-title">
          <span className="results-icon" aria-hidden>
            ⭐
          </span>
          <h1>월간 학습 결과</h1>
          <span className="pill-btn">돌아가기</span>
        </div>
        <div className="results-date">
          <span className="date-dot" aria-hidden />
          <span>2025. 11</span>
        </div>
      </div>

      <div className="results-panel">
        <div className="results-grid">
          {results.map((item) => (
            <article key={item.title} className="result-card">
              <div
                className="result-cover"
                style={{
                  backgroundImage: `linear-gradient(160deg, ${item.colors[0]}, ${item.colors[1]})`,
                }}
              >
                <div className="cover-accent" />
                <div className="cover-title">{item.title}</div>
              </div>
              <div className="result-body">
                <div className="result-title">{item.title}</div>
                <div className="result-stats">
                  <div className="result-row">
                    <span>학습일</span>
                    <strong>{item.date}</strong>
                  </div>
                  <div className="result-row">
                    <span>북퀴즈 정답률</span>
                    <strong className={item.grade === "A" ? "text-blue" : item.grade === "B" ? "text-green" : item.grade === "C" ? "text-orange" : "text-red"}>
                      {item.quiz}
                    </strong>
                  </div>
                  <div className="result-row">
                    <span>AI음성 평가</span>
                    <GradePill grade={item.grade} />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
