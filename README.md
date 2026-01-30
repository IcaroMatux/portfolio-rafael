# Portfólio Profissional - Rafael Miranda

Este repositório contém o código-fonte do portfólio pessoal de Rafael Miranda, uma aplicação web moderna desenvolvida para centralizar e exibir uma carreira multidisciplinar que une **Modelagem**, **Design**, **Consultoria de Imagem** e **Hospedagem**.

O projeto foi construído com foco em performance, design responsivo e uma experiência de usuário (UX) sofisticada, refletindo a estética e o profissionalismo do proprietário.

## 🚀 Tecnologias Utilizadas

A arquitetura do projeto baseia-se em uma stack robusta e atualizada para garantir escalabilidade e manutenibilidade:

- **[React](https://react.dev/)**: Biblioteca principal para construção da interface do usuário baseada em componentes funcionais e Hooks.
- **[TypeScript](https://www.typescriptlang.org/)**: Utilizado para adicionar tipagem estática ao JavaScript, aumentando a segurança do código e facilitando a detecção de erros em tempo de desenvolvimento.
- **[Vite](https://vitejs.dev/)**: Build tool de próxima geração que proporciona um ambiente de desenvolvimento extremamente rápido (HMR) e builds de produção otimizados.
- **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS *utility-first* utilizado para estilização completa. Permite a criação de um design system consistente e responsivo diretamente nas classes dos componentes.
- **[i18next](https://www.i18next.com/)**: Solução completa de internacionalização (i18n), permitindo que o portfólio suporte múltiplos idiomas (Inglês e Português) de forma dinâmica.
- **[ESLint](https://eslint.org/)**: Ferramenta de linting configurada para manter a qualidade e padronização do código.

## ✨ Funcionalidades

A aplicação foi desenvolvida como uma SPA (Single Page Application) com as seguintes características:

- **Internacionalização (i18n)**: Alternância de conteúdo entre idiomas sem recarregamento da página.
- **Hero Section Interativa**: Apresentação com efeitos de digitação (*typewriter*) para destacar as áreas de atuação (Experience, Design, Creativity).
- **Portfólio Multissetorial**:
  - **Modelo**: Galeria de imagens categorizada (Lifestyle, Editorial, Studio, etc.).
  - **Design**: Showcase de projetos com descrição de objetivos, soluções e resultados.
- **Serviços de Estética**: Seção detalhada sobre consultoria de imagem, direção criativa e análise facial.
- **Hospedagem**: Apresentação de acomodações com lista de amenidades e diferenciais competitivos.
- **Formulário de Contato**: Interface funcional para captação de leads e oportunidades, segmentada por assunto.
- **Design Responsivo**: Layout fluido que se adapta a desktops, tablets e dispositivos móveis.

## 🎨 Estilização e Design (Tailwind CSS)

O uso do **Tailwind CSS** permitiu uma abordagem ágil e precisa no design visual:

- **Identidade Visual**: Implementação de uma estética minimalista e sofisticada ("Where sophistication meets professionalism").
- **Layouts Flexíveis**: Uso extensivo de Flexbox e Grid para estruturar seções complexas como as galerias de fotos e cards de serviços.
- **Micro-interações**: Efeitos de *hover*, transições de opacidade e transformações suaves para enriquecer a navegação.
- **Tipografia e Espaçamento**: Controle granular sobre hierarquia visual e respiro entre elementos.

## 📂 Estrutura do Projeto

A estrutura de diretórios segue as melhores práticas do ecossistema React/Vite:

```text
src/
├── assets/          # Recursos estáticos (imagens, ícones)
├── components/      # Componentes React reutilizáveis (Header, Footer, Cards)
├── i18n/            # Configuração de internacionalização
│   └── locales/     # Arquivos JSON de tradução (en.json, pt.json)
├── styles/          # Estilos globais e configuração do Tailwind
├── App.tsx          # Componente raiz e roteamento
└── main.tsx         # Ponto de entrada da aplicação
```
