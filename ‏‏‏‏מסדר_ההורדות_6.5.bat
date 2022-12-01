@echo off
chcp 1255>nul
MODE CON: COLS=80 lines=30
color b
set VER=6.5
title מסדר ההורדות %VER%

:start
cls
echo.
echo.
echo                                  %VER% תודרוהה רדסמ
echo                               ======================
echo.
echo         2 שקה תורחא תויקיתל 1 שקה תודרוהה תייקית תא רדסל ןיינועמ התא םא
echo.
echo.
echo.
choice /c 12
if errorlevel 2 goto choice
if errorlevel 1 goto default

:choice
cls
echo.
echo.
echo ןולחה ךותל היוצר היקית רורג
set/p source=">>>"
cd /d %source%
goto :go

:default
cd /d "%userprofile%\downloads"
goto :go

:go
cls
::מסמכים
for %%i in (*.epub,*.chm,*.cpp,*.pub,*.pubx,*.csv,*.cxx,*.doc,*.docm,*.docx,*.dot,*.dotm,*.dotx,*.h,*.hpp,*.htm,*.html,*.hxx,*.ini,*.java,*.lua,*.mht,*.hteml,*.mhtml,*.odt,*.pdf,*.potx,*.potm,*.ppam,*.ppsm,*.ppsx,*.pps,*.ppt,*.pptm,*.pptx,*.rtf,*.sldm,*.sldx,*.thmx,*.txt,*.vsd,*.wpd,*.wps,*.wri,*.xlam,*.xls,*.xlsb,*.xlsm,*.xlsx,*.xltm,*.xltx,*.xml) do if exist %%i md "מסמכים" & move "%%i" "מסמכים">>םוכיס & cls

::פונטים
for %%i in (*.fon,*.ttf,*.ttc,*.fnt,*.otf) do md "קבצי הרצה/גופנים" & move "%%i" "קבצי הרצה/גופנים">>םוכיס & cls

::אדובי
for %%i in (*.3dxml,*.prc,*.u3d,*.dwg,*.jt,*.xvl,*.stl,*.dxf,*.indd,*.ai,*.psd,*.indd) do md "מסמכים\קבצי אדוב" & move "%%i" "מסמכים\קבצי אדוב">>םוכיס & cls

::קודולר
for %%i in (*.aia,*.aix,*.ais) do md "מסמכים\קודולר" & move "%%i" "מסמכים\קודולר">>םוכיס & cls

::קבצי וידאו
for %%i in (*.3g2,*.3gp,*.3gp2,*.3gpp,*.amr,*.amv,*.asf,*.avi,*.bdmv,*.bik,*.d2v,*.divx,*.drc,*.dsa,*.dsm,*.dss,*.dsv,*.evo,*.f4v,*.flc,*.fli,*.flic,*.flv,*.hdmov,*.ifo,*.ivf,*.m1v,*.m2p,*.m2t,*.m2ts,*.m2v,*.m4b,*.m4p,*.m4v,*.mkv,*.mp2v,*.mp4,*.mp4v,*.mpe,*.mpeg,*.mpg,*.mpls,*.mpv2,*.mpv4,*.mov,*.mts,*.ogm,*.ogv,*.pss,*.pva,*.qt,*.ram,*.ratdvd,*.rm,*.rmm,*.rmvb,*.roq,*.rpm,*.smil,*.smk,*.swf,*.tp,*.tpr,*.ts,*.vob,*.vp6,*.webm,*.wm,*.wmp,*.wmv) do if exist %%i md "וידאו" & move "%%i" "וידאו">>םוכיס & cls

::קבצי שמע
for %%i in (*.aac,*.ac3,*.aif,*.aifc,*.aiff,*.au,*.cda,*.dts,*.fla,*.flac,it,*.m1a,*.m2a,*.m3u,*.m4a,*.mid,*.midi,*.mka,*.mod,*.mp2,*.mp3,*.mpa,*.ogg,*.ra,*.rmi,*.spc,*.rmi,*.snd,*.umx,*.voc,*.wav,*.wma) do if exist %%i md "אודיו" & move "%%i" "אודיו">>םוכיס & cls

::קבצי ארכיון
for %%i in (*.7z,*.ace,*.arj,*.bz2,*.cab,*.gz,*.gzip,*.jar,*.r00,*.r01,*.r02,*.r03,*.r04,*.r05,*.r06,*.r07,*.r08,*.r09,*.r10,*.r11,*.r12,*.r13,*.r14,*.r15,*.r16,*.r17,*.r18,*.r19,*.r20,*.r21,*.r22,*.r23,*.r24,*.r25,*.r26,*.r27,*.r28,*.r29,*.rar,*.tar,*.tgz,*.z,*.zip) do if exist %%i md "קבצי ארכיון" & move "%%i" "קבצי ארכיון" >>םוכיס & cls

::קבצי הרצה
for %%i in (*.exe,*.msi,*.msp,*.scr) do md "קבצי הרצה" & move "%%i" "קבצי הרצה">>םוכיס & cls

::אפליקציות
for %%i in (*.apk,*.xapk) do md "קבצי הרצה/אפליקציות" & move "%%i" "קבצי הרצה\אפליקציות">>םוכיס & cls

::סקריפטים
for %%i in (*.cmd,*.ps1,*.reg) do md "קבצי הרצה/סקריפטים" & move "%%i" "קבצי הרצה/סקריפטים">>םוכיס & cls

::ההעברה מחולקת לשתיים כדי שהקובץ הנוכחי לא יועבר יחד עם כל הקבצים
for %%i in (*.bat) do md "קבצי הרצה/סקריפטים" & if not "%%i"=="%~nx0" move "%%i" "קבצי הרצה/סקריפטים">>םוכיס & cls

::קבצי איסו
for %%i in (*.img,*.iso) do md "קבצי הרצה/קבצי ISO" & move "%%i" "קבצי הרצה/קבצי ISO">>םוכיס & cls

::תמונות
for %%i in (*.webp,*.svg,*.bmp,*.gif,*.ico,*.jpe,*.jpeg,*.jpg,*.pcx,*.png,*.psd,*.tga,*.tif,*.tiff,*.wmf)  do md "תמונות" & move "%%i" "תמונות">>םוכיס & cls

if exist םוכיס (
cls
echo.
echo.
echo                                :ורבעוהש םיצבקה רפסמ & find /c "1" םוכיס & del םוכיס
) else (
echo.
echo.
echo                                  !םיצבק ואצמנ אל
)
echo.
echo.
echo.
echo                    1 שקה םיצבק יגוס יפל תומלש תויקית רדסל ידכ
echo                        2 שקה ישארה טירפתל הרזחו םויסל
echo. 
echo.
choice /c 12
if errorlevel 2 goto :start
if errorlevel 1 goto :folder-scanner

::מסדר התיקיות השלמות

:folder-scanner
for /d %%a in (*) do (set drive="%%a" & set d_name="%%~na" & call :scanner)
echo.
goto :end

:scanner
::כניסה לתיקיה הנבחרת
::שבלולאת פור שלמעלה
cd /d %drive%

::בדיקת מספר הקבצים בתיקיה הנוכחית
set num_all=0
for %%f in (*) do @(set /a num_all+=1 > nul)

::סריקת התיקיה ובדיקת מספר הקבצים שבה לפי סוג
set num_fol=0
for /d %%f in (*) do @(set /a num_fol+=1 > nul)
if %num_fol% gtr 0 cd.. & exit /b 0

set num_doc=0
for %%f in (*.epub,*.chm,*.cpp,*.pub,*.csv,*.cxx,*.doc,*.dot,*.dotm,*.dotx,*.h,*.hpp,*.htm,*.html,*.hxx,*.ini,*.java,*.lua,*.mht,*.mhtml,*.odt,*.pdf,*.potx,*.potm,*.ppam,*.ppsm,*.ppsx,*.pps,*.ppt,*.rtf,*.sldm,*.sldx,*.thmx,*.txt,*.vsd,*.wpd,*.wps,*.wri,*.xlam,*.xls,*.xltm,*.xltx,*.xml) do @(set /a num_doc+=1 > nul)
set num_prog=0
for %%f in (*.bat,*.cmd,*.exe,*.msi,*.msp,*.scr) do @(set /a num_prog+=1 > nul)
set num_vid=0
for %%f in (*.3g2,*.3gp,*.3gp2,*.3gpp,*.amr,*.amv,*.asf,*.avi,*.bdmv,*.bik,*.d2v,*.divx,*.drc,*.dsa,*.dsm,*.dss,*.dsv,*.evo,*.f4v,*.flc,*.fli,*.flic,*.flv,*.hdmov,*.ifo,*.ivf,*.m1v,*.m2p,*.m2t,*.m2ts,*.m2v,*.m4b,*.m4p,*.m4v,*.mkv,*.mp2v,*.mp4,*.mp4v,*.mpe,*.mpeg,*.mpg,*.mpls,*.mpv2,*.mpv4,*.mov,*.mts,*.ogm,*.ogv,*.pss,*.pva,*.qt,*.ram,*.ratdvd,*.rm,*.rmm,*.rmvb,*.roq,*.rpm,*.smil,*.smk,*.swf,*.tp,*.tpr,*.ts,*.vob,*.vp6,*.webm,*.wm,*.wmp,*.wmv) do @(set /a num_vid+=1 > nul)
set num_aud=0
for %%f in (*.mp3,*.wav,*.wma) do @(set /a num_aud+=1 > nul)
set num_pic=0
for %%f in (*.bmp,*.gif,*.ico,*.jpe,*.jpeg,*.jpg,*.pcx,*.png,*.psd,*.tga,*.tif,*.tiff,*.wmf) do @(set /a num_pic+=1 > nul)
set num_zip=0
for %%f in (*.7z,*.ace,*.arj,*.bz2,*.cab,*.gz,*.gzip,*.jar,*.r00,*.r01,*.r02,*.r03,*.r04,*.r05,*.r06,*.r07,*.r08,*.r09,*.r10,*.r11,*.r12,*.r13,*.r14,*.r15,*.r16,*.r17,*.r18,*.r19,*.r20,*.r21,*.r22,*.r23,*.r24,*.r25,*.r26,*.r27,*.r28,*.r29,*.rar,*.tar,*.tgz,*.z,*.zip) do @(set /a num_zip+=1 > nul)
set num_apk=0
for %%f in (*.apk) do @(set /a num_apk+=1 > nul)


::הצגת מספר הקבצים שנמצאו לפי סוג
echo.
echo %drive%
echo %num_all% = םיצבקה ללכ
echo %num_doc% = םיכמסמ
echo %num_prog% = הצרה יצבק
echo %num_vid% = ואדיו
echo %num_aud% = וידוא
echo %num_pic% = תונומת
echo %num_zip% = ןויכרא
echo %num_apk% = תויצקילפא
cd..
::רצף פקודות שבודק אם כל הקבצים בתיקיה הם מאותו הסוג
::ואם התנאי מתקיים הקבצים מועברים לתיקיה המתאימה
if %num_all%==%num_doc% if %num_all% gtr 0 if not %d_name% == "מסמכים" (md "מסמכים" & move %drive% "מסמכים")

if %num_all%==%num_prog% if %num_all% gtr 0 if not %d_name% == "קבצי הרצה" (md "קבצי הרצה" move %drive% "קבצי הרצה")

if %num_all%==%num_vid% if %num_all% gtr 0 if not %d_name% == "וידאו" (md "וידאו" & move %drive% "וידאו")

if %num_all%==%num_aud% if %num_all% gtr 0 if not %d_name% == "אודיו" (md "אודיו" & move %d_name% "אודיו")

if %num_all%==%num_pic% if %num_all% gtr 0 if not %d_name% == "תמונות" (md "תמונות" & move %drive% "תמונות")

if %num_all%==%num_zip% if %num_all% gtr 0 if not %d_name% == "קבצי ארכיון" (md "קבצי ארכיון" & move %drive% "קבצי ארכיון")

if %num_all%==%num_apk% if %num_all% gtr 0 if not %d_name% == "קבצי הרצה/אפליקציות" (md "קבצי הרצה/אפליקציות" & move %drive% "קבצי הרצה/אפליקציות")

exit /b 0


:end
echo.
echo.
echo.
echo                         !בוש ליחתהל ליבשב והשלכ שקמ לע ץחל
pause>nul
cls
goto :start

::קרדיט: nh.local11@gmail.com
