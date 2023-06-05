@echo off
:start
set /p NODE_LAST_FOLDER_NAME="Enter a folder name under the guided root folder:"

set "PATH_VALUE=%PATH%"

echo %PATH_VALUE% | find /I "%%NVM_HOME%%" > NUL
if errorlevel 1 (
  for /f "skip=2 tokens=2,*" %%A in ('reg query "HKLM\System\CurrentControlSet\Control\Session Manager\Environment" /v Path 2^>nul') do (
    setx /M PATH "%%B;%%NODE_HOME%%;"
  )
)

set "NODE_HOME=C:\scard\node\nodejs"
setx /M NODE_HOME "%NODE_HOME%"
set "NODE_PATH=C:\scard\node\%NODE_LAST_FOLDER_NAME%"

rmdir /s /q "%NODE_HOME%"

mklink /D "%NODE_HOME%" "%NODE_PATH%"

if not exist %NODE_PATH% (
  echo 경로가 없습니다 경로를 확인하고 다시시도해 주세요...
)

set /p RESTART="Do you want to restart? (Y/N): "
if /i "%RESTART%"=="Y" goto start

@echo on