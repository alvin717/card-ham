# 프로젝트 개발 지침서 (GEMINI.md)

이 문서는 본 프로젝트의 웹 사이트 및 웹 앱 개발 시 Gemini CLI가 준수해야 할 핵심 설계 및 코딩 규칙을 정의합니다.

## 1. 기본 원칙 (Core Principles)
- 모바일 퍼스트(Mobile-First): 모든 UI/UX는 스마트폰 화면(기준 너비 375px~390px)을 기본으로 설계한 뒤, 태블릿 및 데스크톱으로 확장합니다.
- 가벼운 구조: 순수 HTML5, CSS3, 바닐라 JavaScript 구성을 기본값으로 채택합니다.
- 직관적 가독성: 초보자도 쉽게 읽고 유지보수할 수 있도록 코드 전반에 명확하고 친절한 한국어 주석을 작성합니다.

## 2. 반응형 레이아웃 및 뷰포트 기준
- 뷰포트 메타태그 필수: <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
- 표준 미디어 쿼리 분기점:
  - 모바일(기본): ~ 767px
  - 태블릿: 768px ~ 1023px
  - 데스크톱: 1024px 이상
- 유연한 단위 사용: 고정 px 대신 rem, %, vw/vh, clamp()를 우선 사용합니다.

## 3. 모바일 친화적 UI 컴포넌트 설계
- 터치 영역 확보: 버튼, 링크 등 터치 요소의 최소 높이/너비는 44px 이상으로 설정합니다.
- 핵심 모바일 기능: 화면 하단 고정 전화 상담/문의 플로팅 버튼(tel: 링크), 하단 네비게이션 바.
- 가로 스크롤 방지: box-sizing: border-box 및 overflow-x: hidden 기본 적용.

## 4. 코드 작성 및 응답 표준
- 한국어 주석 필수
- 이미지 alt 속성 및 외부 링크 rel="noopener noreferrer" 필수
- HTML, CSS, JS 파일 모듈 분리 작성

## 5. 명함 기본 정보 (삼성생명 속초금융지점)
- 이름: 함용순 팀장
- 소속: 삼성생명 · 삼성화재 · 삼성카드 속초금융지점 (삼성금융네트웍스)
- 직통 전화: 010-7707-4988
- 팩스 번호: 033-638-8594
- 대표 전화: 1588-3114
- 이메일: eunho2546@naver.com
- 사무실 주소: 강원도 속초시 동해대로4236(교동) 아남프라자 11층

## 6. 공식 배포 및 GitHub Pages 저장소 규정
- GitHub 저장소: https://github.com/alvin717/my--card.git
- GitHub Pages 배포 웹 주소: https://alvin717.github.io/my--card/
- 브랜치: main
- 자동 동기화 스크립트: 배포하기.bat

