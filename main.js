const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
// const electronReload = require('electron-reload');
const sourcePath = path.join(__dirname, '/dist/angular-scss/');
let mainWindow;
let appReady = false;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        minWidth: 375,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true
        }
    });
    // Đặt biểu tượng của cửa sổ
    mainWindow.setIcon(path.join(sourcePath, 'assets/logo/fbeelogo-icon.png'))
    // Load ứng dụng Angular
    mainWindow.loadURL(
        url.format({
            pathname: path.join(sourcePath, 'index.html'),
            protocol: 'file:',
            slashes: true,
        })
    );

// Tạo menu tùy chỉnh
    const menu = Menu.buildFromTemplate([]);

    // Thiết lập menu cho cửa sổ chính
    Menu.setApplicationMenu(menu);
    // Ngăn chặn sự kiện tải lại trang khi nhấn Ctrl + R
    mainWindow.webContents.on('before-input-event', (event, input) => {
        if (input.control && (input.key === 'r' || input.key === 'R')) {
            event.preventDefault();
        }
    });

    // Ngăn chặn sự kiện tải lại trang khi nhấn Ctrl + Shift + R
    mainWindow.webContents.on('web-contents-created', (event, contents) => {
        contents.on('before-input-event', (event, input) => {
            if (input.control && input.shift && (input.key === 'r' || input.key === 'R')) {
                event.preventDefault();
            }
        });
    });
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
    // Sử dụng electron-reload để tải lại ứng dụng khi có thay đổi trong mã nguồn
    // electronReload(sourcePath, {
    //     electron: path.join(__dirname, 'node_modules', '.bin', 'electron.cmd')
    // });
}

app.on('ready-to-show', () => {
    appReady = true;
    mainWindow.show();
});
// Khởi tạo ứng dụng
app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});