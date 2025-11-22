# Reading 101 학생용 프로토타입

이 저장소는 PDF 기획안을 바탕으로 만든 정적(모의 데이터) Next.js 프로토타입입니다. **코드 수정 없이도 실행**할 수 있고, **필요한 부분만 텍스트 파일을 고쳐도 화면이 바로 반영**됩니다.

## 빠른 시작

### 준비물
- **Node.js 18 이상** (확인: `node -v`)
  - 미설치 시: https://nodejs.org 에서 LTS 버전 다운로드
- **pnpm** 패키지 매니저 (권장)
  - 설치: `npm install -g pnpm`

### 실행 방법

```bash
# 1. 의존성 설치 (처음 한 번만)
pnpm install

# 2. 개발 서버 실행
pnpm dev

# 3. 브라우저에서 http://localhost:3000 접속
```

**포트 변경이 필요한 경우**: `pnpm dev -- --port 3001`

## 프로젝트 구조

```
reading101/
├── src/app/
│   ├── page.tsx              # HOME - 대시보드 (추천도서, 진행중 도서, 완독 도서)
│   ├── reading/page.tsx      # READING - 도서 검색 및 학습 플로우
│   ├── report/page.tsx       # REPORT - 누적 지표, 월간 차트
│   ├── profile/page.tsx      # PROFILE - 사용자 정보 수정
│   ├── completed/page.tsx    # 완독 도서 목록
│   ├── layout.tsx            # 공통 레이아웃 (사이드바, 네비게이션)
│   ├── components/
│   │   └── Nav.tsx           # 네비게이션 컴포넌트
│   └── globals.css           # 전역 스타일
├── public/                   # 정적 파일 (이미지, 아이콘)
└── CLAUDE.md                 # AI 개발 가이드
```

### 주요 페이지

| 페이지 | 경로 | 설명 |
|--------|------|------|
| HOME | `/` | 사용자 대시보드, 학습 현황, 추천도서 |
| READING | `/reading` | 도서 검색 및 학습 플로우 (Word Preview → E-Book → Quiz → AI Speak) |
| REPORT | `/report` | 누적 학습 지표, 월간 성과 차트 |
| PROFILE | `/profile` | 사용자 정보 수정 (아바타 기능은 MVP 제외) |

## 개발 가이드

### 개발 명령어

```bash
pnpm dev      # 개발 서버 실행 (http://localhost:3000)
pnpm build    # 프로덕션 빌드 및 타입 체크
pnpm start    # 빌드된 앱 실행
pnpm lint     # ESLint 실행
```

### 데이터 수정하기 (비개발자용)

프로토타입은 실제 데이터베이스 없이 **파일 내 모의 데이터**를 사용합니다.

#### 텍스트/데이터 변경
1. 해당 페이지 파일 열기 (예: `src/app/page.tsx`)
2. 파일 상단의 데이터 배열 찾기
   ```typescript
   // 예시: HOME 페이지의 추천도서
   const recommendations = [
     { title: "The New Kid", type: "F", ar: "1.1-1.2", ... }
   ]
   ```
3. 원하는 값 수정
4. 저장 → 브라우저 자동 새로고침 (2-3초 소요)

#### 스타일 변경
- **전역 색상/여백**: `src/app/globals.css` 수정
- **페이지별 스타일**: 해당 페이지의 `.module.css` 파일 수정

### 새로운 페이지 추가

1. `src/app/새경로/page.tsx` 파일 생성
2. `src/app/components/Nav.tsx`에 메뉴 항목 추가:
   ```typescript
   const navItems = [
     // 기존 항목들...
     { href: "/새경로", label: "새메뉴", icon: "icon_name" }
   ]
   ```
3. 아이콘 파일을 `public/`에 추가

## 문제 해결

| 문제 | 해결 방법 |
|------|----------|
| 포트 충돌 | `pnpm dev -- --port 3001` |
| 의존성 오류 | `pnpm install` 재실행 |
| 서버 중지 | 터미널에서 `Ctrl + C` |
| 변경사항 미반영 | 브라우저 강력 새로고침 (`Cmd+Shift+R` / `Ctrl+Shift+R`) |

## 기술 스택

- **Framework**: Next.js 16.0.3 (App Router)
- **UI Library**: React 19.2.0
- **Language**: TypeScript 5
- **Styling**: CSS Modules + Global CSS
- **Package Manager**: pnpm (권장)

## 참고 사항

- 이 프로토타입은 **정적 페이지**로 실제 API 연동 없이 동작합니다
- 실제 데이터 연동이 필요한 경우 백엔드 개발자와 API 명세를 협의하세요
- 프로덕션 배포 전 반드시 `pnpm build`로 빌드 테스트 필요
- AI 코드 어시스턴트 사용 시 `CLAUDE.md` 참고
