const { app, BrowserWindow } = require('electron');

app.on('before-quit', () => {
    console.log('Saliendo...');
});

app.on('ready', () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'Trivia',
        center: true,
        maximizable: false,
        webPreferences: {
            nodeIntegration: true,
        },
        kiosk: true,
        resizable: false, //bloquear reajuste de pantalla
        titleBarStyle: 'hidden', //Ocultar la barra de herramientas y de titulo
    });

    //Cargar htlmLocal
    win.loadFile('index.html');

    win.on('closed', () => {
        app.quit();
    });
});
