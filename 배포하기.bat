@echo off
chcp 65001 > nul
echo ========================================================
echo [함용순 팀장 모바일 명함] GitHub Pages 배포 동기화 시작...
echo ========================================================
echo.

cd /d "%~dp0"
git add .
git commit -m "함용순 팀장 모바일 명함 업데이트 (%date% %time%)"
git push -u origin main

echo.
echo ========================================================
echo [배포 완료] 깃허브(GitHub Pages)에 업로드되었습니다!
echo.
echo 🌐 공식 모바일 명함 웹 주소:
echo https://alvin717.github.io/my--card/
echo.
echo (※ 최초 1회 또는 업데이트 후 1~2분 뒤 인터넷에 반영됩니다)
echo ========================================================
pause
