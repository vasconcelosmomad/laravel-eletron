
Sistema de Gestão Desktop Híbrido (Laravel + Electron)

---

## Descrição

O foco deste projeto é a integração e empacotamento da aplicação web já existente, proporcionando uma experiência desktop moderna e responsiva.

---

## Principais Benefícios
- **Reaproveitamento total do backend e frontend web**
- **Distribuição facilitada**: instaladores para Linux (.deb, .AppImage) e Windows (.exe)
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
   > Substitua `<URL_DO_REPOSITORIO>` pelo endereço real do seu repositório (exemplo: https://github.com/vasconcelosmomad/laravel-eletron.git)
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd my-eletron-projects
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

## Gerar Executável para Linux e Windows

### Linux (.deb e .AppImage)
1. **Build para Linux:**
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

#### Desinstalar o pacote .deb
Para remover o aplicativo instalado via `.deb`:
```bash
sudo apt remove ngestorx
```
Para remover completamente (incluindo arquivos de configuração):
```bash
sudo apt purge ngestorx
```
Para limpar dependências não utilizadas:
```bash
sudo apt autoremove
```

### Windows (.exe)
1. **Build para Windows:**
   ```bash
   npm run build:win
   ```
   O instalador `.exe` será gerado na pasta `dist`.

---

## Estrutura Recomendada do Projeto

```
my-eletron-projects/
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