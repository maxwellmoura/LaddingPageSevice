# Dev & Tech - Landing Page

Uma landing page moderna e responsiva para apresentar serviços de desenvolvimento web e suporte técnico de TI.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápido e moderno
- **JavaScript** - Linguagem de programação
- **CSS3** - Estilização moderna com variáveis CSS e animações

## 📋 Seções

1. **Header** - Navegação fixa com toggle de tema claro/escuro
2. **Hero** - Apresentação principal com chamada à ação
3. **Services** - 6 serviços principais com ícones
4. **Skills** - Habilidades técnicas organizadas por categoria
5. **Portfolio** - Galeria de projetos realizados
6. **Contact** - Formulário de contato e informações
7. **Footer** - Links rápidos e redes sociais

## 🎨 Features

- ✨ Tema claro e escuro (dark mode)
- 📱 Totalmente responsivo (mobile, tablet, desktop)
- ⚡ Animações suaves e transições
- 🎯 Navegação por âncoras (scroll suave)
- 📧 Formulário de contato interativo
- 🔗 Links para redes sociais

## 📦 Instalação

### Pré-requisitos
- Node.js (versão 14 ou superior)
- npm ou yarn

### Passos

1. Navegue até a pasta do projeto:
```bash
cd LaddingPage
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra seu navegador e acesse `http://localhost:3000`

## 🔨 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build para produção
- `npm run preview` - Preview da build de produção

## 📝 Personalizações Recomendadas

Antes de colocar em produção, atualize:

1. **Header** - Logo e tagline
2. **Hero** - Título e descrição pessoal
3. **Contact** - Email, telefone e links de redes sociais
4. **Services** - Adapte os serviços oferecidos
5. **Skills** - Atualize com suas habilidades reais
6. **Portfolio** - Adicione seus projetos e links

## 🎯 Estrutura de Pastas

```
LaddingPage/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Skills.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── header.css
│   │   ├── hero.css
│   │   ├── services.css
│   │   ├── skills.css
│   │   ├── portfolio.css
│   │   ├── contact.css
│   │   └── footer.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

## 💡 Dicas

- Use o CSS nativo (sem dependências externas) para manter o projeto leve
- As cores estão definidas como variáveis CSS em `global.css`
- Customize as cores alterando os valores de `--primary-color`, `--secondary-color`, etc.
- O dark mode funciona automaticamente salvando a preferência no `classList` do body

## 📄 Licença

Este projeto é fornecido como está para uso pessoal.

---

**Desenvolvido com ❤️ usando React + Vite**
