[Setup]
AppName=Fbee Cinema
AppVersion=1.1
DefaultDirName={pf}\FbeeCinema
OutputDir=C:\MySetupFiles
OutputBaseFilename=FbeeCinema
Compression=lzma
SolidCompression=yes
ArchitecturesInstallIn64BitMode=x64

[Files]
Source: "C:\Users\manh7\WebstormProjects\angularScss\fbee-win32-x64\*"; DestDir: "{app}"; Flags: ignoreversion recursesubdirs createallsubdirs

[Icons]
Name: "{commondesktop}\FbeeCinema"; Filename: "C:\Users\manh7\WebstormProjects\angularScss\fbee-win32-x64\fbee.exe"; IconFilename: "{app}\resources\app\icon.ico"
