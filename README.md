
Sistema de Gestão Desktop Híbrido (Laravel + Electron)

---

## Descrição

O foco deste projeto é a integração e empacotamento da aplicação web já existente, proporcionando uma experiência desktop moderna e responsiva.

---

## Principais Benefícios
- **Reaproveitamento total do backend e frontend web**
- **Distribuição facilitada**: instaladores para Linux (.deb, .AppImage)
- **Experiência desktop**: ícone, menu, integração com o SO
- **Zero refatoração**: não é necessário alterar o código web

---

## Requisitos
- Node.js >= 16
- npm >= 8
- Linux (testado em Ubuntu/Debian, adaptável para outros sistemas)
- (Opcional) Laravel rodando localmente ou em servidor

---

## Instalação e Execução

1. **Clone o repositório:**
n
   git clone <URL_DO_REPOSITORIO>
   cd my-electron-projects
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento:**
   ```bash
   npm start
   ```
   > O Electron abrirá a interface web hospedada (ex: http://localhost:9000/login)

---

## Gerar Executável para Linux

1. **Build para Linux (.deb e .AppImage):**
   ```bash
   npm run build:linux
   ```
   Os arquivos serão gerados na pasta `dist`.

2. **Instalar o .deb:**
   ```bash
   sudo dpkg -i dist/nGestorX_2.0.0_amd64.deb
   ```

3. **Executar o .AppImage:**
   ```bash
   chmod +x dist/nGestorX-2.0.0.AppImage
   ./dist/nGestorX-2.0.0.AppImage
   ```

---

## Estrutura Recomendada do Projeto

```
my-electron-projects/
├── main.js                # Processo principal do Electron
├── preload.js             # Script de preload para comunicação segura
├── package.json           # Configurações do Electron e build
├── icons/                 # Ícones da aplicação
│   └── icon-256.png
├── dist/                  # Arquivos gerados pelo build (executáveis)
├── README.md              # Documentação do projeto
└── webapp/                # (Opcional) Código-fonte da aplicação Laravel, caso queira manter tudo junto
    ├── public/
    ├── app/
    ├── routes/
    └── ...
```
- **webapp/**: (Opcional) Diretório sugerido para manter o código Laravel junto ao projeto Electron, facilitando o versionamento e integração. Se o Laravel estiver em outro repositório, basta apontar o Electron para a URL correta.
- O Electron pode ser configurado para apontar para a URL local ou remota do Laravel (ex: `http://localhost:9000/login`).

---

## Observação sobre a Arquitetura
> Este projeto **não foi desenvolvido originalmente em Electron**. A aplicação web (Laravel e tecnologias web) é apenas embutida dentro do Electron, que serve como um “container desktop”.

---

## Contato
- **Empresa:** SOFTETECH
- **Responsável:** mvasconcelos@softetech.com
- **Homepage:** https://ngestorx.softetech.com

---

> Projeto desenvolvido por SOFTETECH 