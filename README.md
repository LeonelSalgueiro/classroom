# Adivinhe

Um jogo de adivinhação de palavras relacionadas à programação, desenvolvido com React e TypeScript. Os jogadores têm que adivinhar palavras relacionadas ao mundo da programação, tendo como auxílio uma dica sobre a palavra.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- React
- TypeScript
- CSS Modules
- Vite

## 📋 Funcionalidades

- Sistema de tentativas (máximo 10 tentativas)
- Dicas para cada palavra
- Feedback visual das letras já utilizadas
- Sistema de reinício do jogo
- Palavras relacionadas à programação
- Interface intuitiva e responsiva

## 🎮 Como Jogar

1. O jogo seleciona aleatoriamente uma palavra relacionada à programação
2. Uma dica sobre a palavra é mostrada
3. Digite uma letra no campo de entrada
4. Se a letra estiver na palavra, ela será revelada nas posições corretas
5. Se a letra não estiver na palavra, você perde uma tentativa
6. O jogo termina quando você:
   - Acerta a palavra completa
   - Ou esgota todas as 10 tentativas

## 🚀 Como executar

```bash
# Clone este repositório
$ git clone https://github.com/LeonelSalgueiro/classroom.git

# Acesse a pasta do projeto
$ cd classroom

# Instale as dependências
$ npm install

# Execute a aplicação
$ npm run dev

# A aplicação estará disponível em http://localhost:5173
```

## 💻 Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

## 🎯 Estrutura do Projeto

```
src/
  ├── components/     # Componentes React
  ├── utils/         # Utilitários e dados
  ├── assets/        # Recursos estáticos
  ├── App.tsx        # Componente principal
  └── main.tsx       # Ponto de entrada
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request
