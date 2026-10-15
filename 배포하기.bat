@echo off
chcp 65001 > nul
echo ========================================================
echo [통합 모바일 명함] GitHub Pages 배포 동기화 시작...
echo ========================================================
echo.

cd /d "%~dp0"
git add .
git commit -m "통합 모바일 명함 분리 배포 (이진형: /lee/, 신은호: /shin/, 함용순: /ham/)"
git push -u origin main

echo.
echo ========================================================
echo [배포 완료] 모든 명함이 각자 고유한 주소로 배포되었습니다!
echo.
echo 🌐 1. 공식 통합 허브:
echo https://alvin717.github.io/my--card/
echo.
echo 👤 2. 이진형 실장 모바일 명함:
echo https://alvin717.github.io/my--card/lee/
echo.
echo 👤 3. 신은호 대표 모바일 명함:
echo https://alvin717.github.io/my--card/shin/
echo.
echo 👤 4. 함용순 팀장 모바일 명함:
echo https://alvin717.github.io/my--card/ham/
echo.
echo (※ 업로드 후 1~2분 뒤 인터넷에 자동 반영됩니다)
echo ========================================================
pause
