## Reading 101 학생용 프로토타입

이 저장소는 PDF 기획안을 바탕으로 만든 정적(모의 데이터) Next.js 프로토타입입니다. **코드 수정 없이도 실행**할 수 있고, **필요한 부분만 텍스트 파일을 고쳐도 화면이 바로 반영**됩니다.

### 1) 준비물
- macOS/Windows 어디서나 동작
- Node.js 18 이상이 설치되어 있어야 합니다.  
  - 확인: `node -v`  
  - 없으면 https://nodejs.org 에서 LTS(장기지원) 버전 설치

### 2) 실행 방법 (개발 서버)
```bash
cd reading101-proto          # 이 폴더로 이동
npm install                  # 처음 한 번만 실행, 의존성 설치
npm run dev                  # 개발 서버 실행
```
- 브라우저에서 http://localhost:3000 접속
- 실행이 안 되고 포트 오류가 나면 `npm run dev -- --port 3001` 처럼 포트를 바꿔 실행하세요.

### 3) 화면 구성 (모두 정적 목업)
- `src/app/page.tsx` : HOME 대시보드 (추천도서, 진행중, 완독, 레벨 진행도 등)
- `src/app/reading/page.tsx` : 도서 검색/정보, Word Preview → E-Book → Book Quiz → AI Speak 흐름 요약
- `src/app/report/page.tsx` : 누적 지표, 월간 차트, 월간 결과 리스트
- `src/app/profile/page.tsx` : 정보수정(비번 변경, 연락처), 아바타는 MVP 제외 표시
- 공통 레이아웃/내비/스타일: `src/app/layout.tsx`, `src/app/components/Nav.tsx`, `src/app/globals.css`

### 4) 파일을 고치는 법 (비개발자용)
- 텍스트만 바꾸고 싶다면 각 페이지 파일의 목업 데이터를 수정하면 됩니다.  
  예) HOME의 추천도서 제목을 바꾸려면 `src/app/page.tsx` 상단의 `recommendations` 배열을 고치면 됩니다.
- 색상/여백 등 스타일을 바꾸려면 `src/app/globals.css`를 수정하세요.
- 저장하면 브라우저가 자동으로 새로고침되거나 몇 초 내 반영됩니다.

### 5) 흔한 문제 해결
- **포트 충돌/권한 오류**: `npm run dev -- --port 3001` 같이 다른 포트로 실행
- **의존성 오류**: `npm install`을 다시 실행한 뒤 `npm run dev`
- **실행 중 단축키**: 터미널에서 `Ctrl + C`로 서버 중지

### 6) 유지보수 팁
- Git 사용 시: 수정 후 `git status`로 변경 내용 확인 → `git commit`으로 저장
- 새 기능 추가는 `src/app/새폴더/page.tsx`를 만들고, `Nav.tsx`에 메뉴를 추가하면 됩니다.
- 프로토타입은 API 없이 동작하는 정적 페이지입니다. 실제 데이터 연동이 필요하면 개발자에게 API 주소와 필드를 전달하세요.
