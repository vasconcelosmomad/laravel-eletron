/**
 * Arquivo principal do Electron para a aplicação nGestorX
 * Responsável por criar e gerenciar a janela principal da aplicação
 * 
 * @author nGestorX Team
 * @version 1.0.0
 */

const { app, BrowserWindow, Menu, ipcMain } = require('electron');
const path = require('path');

// Variável global para armazenar a referência da janela principal
let win;

/**
 * Cria e configura a janela principal da aplicação
 * Esta função é responsável por:
 * - Configurar as propriedades da janela (tamanho, comportamento, etc.)
 * - Definir as preferências de segurança
 * - Configurar o carregamento da aplicação web
 * - Implementar o sistema de redimensionamento automático baseado na rota
 */
function createWindow () {
  // Criação da janela principal com configurações específicas
  win = new BrowserWindow({
    width: 1024,                    // Largura inicial da janela
    height: 768,                    // Altura inicial da janela
    resizable: true,                // Permite redimensionamento manual
    frame: false,                   // Remove a barra de título padrão do sistema
    maximizable: true,              // Permite maximizar a janela
    minimizable: true,              // Permite minimizar a janela
    fullscreenable: true,           // Permite modo tela cheia
    title: 'nGestorX',              // Título da aplicação
    autoHideMenuBar: true,          // Oculta automaticamente a barra de menu
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),  // Script de pré-carregamento
      contextIsolation: true,       // Isola o contexto do Node.js do renderer
      nodeIntegration: false        // Desabilita integração direta com Node.js por segurança
    }
  });

  // Remove o menu padrão da aplicação
  Menu.setApplicationMenu(null);
  win.setMenuBarVisibility(false);

  // Carrega a aplicação web no endereço especificado
  win.loadURL('http://localhost:9000/login');

  /**
   * Função para redimensionar automaticamente a janela baseado na rota atual
   * - Na rota /login: volta ao tamanho padrão (1024x768)
   * - Em outras rotas: maximiza a janela
   */
  const handleResizeBasedOnRoute = () => {
    const currentURL = win.webContents.getURL();
    console.log('📍 URL atual:', currentURL);

    if (currentURL.includes('/login')) {
      // Se estiver na página de login, volta ao tamanho padrão
      if (win.isMaximized()) {
        win.unmaximize(); // Sai do modo maximizado
      }
      win.setBounds({ width: 1024, height: 768 }); // Define tamanho padrão
    } else {
      // Para outras rotas, maximiza a janela
      win.maximize();
    }
  };

  // Event listeners para detectar mudanças de navegação
  win.webContents.on('did-navigate', handleResizeBasedOnRoute);        // Navegação normal
  win.webContents.on('did-navigate-in-page', handleResizeBasedOnRoute); // Navegação SPA (pushState)
  win.webContents.on('did-finish-load', handleResizeBasedOnRoute);      // Carregamento completo
}

// Inicializa a aplicação quando o Electron estiver pronto
app.whenReady().then(createWindow);

/**
 * Handlers para controles de janela via IPC (Inter-Process Communication)
 * Permite que o processo de renderização controle a janela principal
 */

// Minimiza a janela atual
ipcMain.on('janela:minimizar', () => {
  const w = BrowserWindow.getFocusedWindow();
  if (w) w.minimize();
});

// Alterna entre maximizar/restaurar a janela atual
ipcMain.on('janela:maximizar', () => {
  const w = BrowserWindow.getFocusedWindow();
  if (w) {
    w.isMaximized() ? w.unmaximize() : w.maximize();
  }
});

// Fecha a janela atual
ipcMain.on('janela:fechar', () => {
  const w = BrowserWindow.getFocusedWindow();
  if (w) w.close();
});
