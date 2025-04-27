# Documentação da Plataforma MAX

## Bem-vindo à MAX: A Revolução do Entretenimento

---

## Visão Geral do Projeto
A plataforma MAX é um serviço moderno de IPTV que oferece acesso ininterrupto a mais de 400 canais, filmes, séries, esportes e muito mais. Esta documentação fornece instruções detalhadas para configurar a plataforma, usar seus recursos e aproveitar suas funcionalidades.

## Funcionalidades e Componentes

### 1. Principais Funcionalidades:
- Texto rolante infinito exibindo ofertas.
- Design responsivo para todos os tamanhos de tela (celular, tablet, desktop).
- Animações suaves impulsionadas por AOS e Animate.css.

### 2. Componentes Principais:
- **Navbar**: Fornece navegação intuitiva pela plataforma.
- **PromoPage**: Página inicial de promoções.
- **Plataforma**: Exibe a compatibilidade com dispositivos.
- **AndroidPromo**: Destaca a disponibilidade do app para Android.
- **ScrollingText**: Animação de texto rolante contínuo.
- **PromoOffer**: Componentes promocionais especiais (ex: acesso de 7 dias).
- **Footer**: Detalhes de contato, políticas e links para download de aplicativos.

## Guia de Configuração

### Etapa 1: Pré-requisitos
- Certifique-se de ter o Node.js instalado.
- Recomendado: Instalar um editor de código como o Visual Studio Code.

### Etapa 2: Instalação
- Clone o repositório:
```bash
git clone https://github.com/your-repo/max-platform.git
```
- Acesse o diretório max:
```bash
cd max
```
- Instale as dependências:
```bash
npm install
```
- Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

### Etapa 3: Build para Produção
- Para otimizar o aplicativo para produção:
```bash
npm run build
```

## Estrutura de Arquivos

### Diretório public:
Contém imagens utilizadas no projeto, como:
- `banner.png`: Banners promocionais.
- `logo.png`: Marca da plataforma.
- Ícones de dispositivos para Android, LG, Samsung, FireTV.

### Diretório src:
- **Assets**: Recursos como `react.svg` e `vite.svg`.
- **Components**: Componentes reutilizáveis (PromoOffer, Footer, etc.).
- **Styles**:
  - `App.css`: Estilos globais.
  - `ScrollingText.css`: Estilos personalizados para o texto rolante.

---

Boas transmissões com a MAX!

