@echo off

:loop

cd /d "E:\apna college (MERN stack)"

git status --porcelain > temp.txt

for %%A in (temp.txt) do set size=%%~zA

if not "%size%"=="0" (
echo Changes detected...
git add .
git commit -m "Auto update %date% %time%"
git push
) else (
echo No changes found.
)

del temp.txt

timeout /t 300 /nobreak > nul

goto loop
