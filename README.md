### README.md

# ArtGallery 🎨  

ArtGallery é uma aplicação web responsiva e interativa que conecta usuários à arte de maneira única. Desenvolvido com React e Vite, o projeto apresenta uma galeria digital que permite explorar obras de arte, conhecer seus detalhes e criar uma lista personalizada de favoritas. A plataforma combina design moderno, funcionalidades intuitivas e boas práticas de acessibilidade, proporcionando uma experiência imersiva para todos os usuários.

---

## 🚀 Funcionalidades Principais

- **Exibição de Obras em Formato de Cartões:**  
  A galeria apresenta uma seleção de oito obras de arte, cada uma exibida em formato de cartão contendo miniatura e título.

- **Detalhamento de Obras:**  
  Ao clicar em uma obra, o usuário acessa informações adicionais, como:
  - Nome do artista  
  - Local de origem  
  - Dimensões da obra  

- **Favoritos:**  
  Os usuários podem salvar suas obras favoritas em uma lista personalizada para consulta futura.

- **Múltiplas Páginas:**  
  A aplicação está organizada em diversas páginas, permitindo uma navegação fluida entre galeria, favoritos e artigos relacionados.

- **Busca Personalizada (Funcionalidade Extra):**  
  Um campo de busca intuitivo permite filtrar as obras de arte por título ou artista.

- **Paginação (Funcionalidade Extra):**  
  Navegação por páginas para explorar mais obras além das exibidas inicialmente.

- **Responsividade:**  
  A aplicação é totalmente responsiva, garantindo uma experiência consistente em dispositivos móveis, tablets e desktops.

- **Acessibilidade:**  
  Construído com foco nas diretrizes de acessibilidade para garantir que todos os usuários possam desfrutar da galeria.

---

## Tecnologias Utilizadas

- **Frontend:**  
  - React  
  - React Router  
  - React Slick (para carrosséis e banners)  

- **Backend (API):**  
  A API fornecida para o projeto retorna as informações das obras de arte, incluindo título, imagem, artista, local de origem e dimensões.

- **Empacotamento e Build:**  
  - Vite (otimização para desenvolvimento e produção)  

- **Estilização:**  
  - CSS modular e personalizado  

---

## 📡 API: Estrutura e Endpoints

A aplicação se comunica com uma API REST para buscar dados das obras de arte. Segue a estrutura básica da API:

### Base URL:  
`https://api.artic.edu/api/v1`

### **Endpoints Disponíveis**

1. **Obter Lista de Obras (Paginada):**  
   - **GET** `/artworks?page=<n>`  
   - Retorna uma lista paginada de obras de arte.  
   - **Exemplo de resposta:**
     ```json
     {
       "data": [
         {
           "id": 1,
           "title": "Starry Night",
           "thumbnail": "https://example.com/starry-night.jpg",
           "artist": "Vincent van Gogh"
         },
         ...
       ],
       "pagination": {
         "current_page": 1,
         "total_pages": 3
       }
     }
     ```

2. **Obter Detalhes de uma Obra:**  
   - **GET** `/artworks/:id`  
   - Retorna os detalhes completos de uma obra de arte.  
   - **Exemplo de resposta:**
     ```json
     {
       "id": 1,
       "title": "Starry Night",
       "artist": "Vincent van Gogh",
       "origin": "Netherlands",
       "dimensions": "73.7 cm × 92.1 cm",
       "image": "https://example.com/starry-night-full.jpg",
       "description": "Uma das obras mais icônicas de Van Gogh."
     }
     ```

3. **Favoritar uma Obra:**  
   - **POST** `/favorites`  
   - Adiciona uma obra à lista de favoritos do usuário.  
   - **Body:**
     ```json
     {
       "user_id": 123,
       "artwork_id": 1
     }
     ```
  

---

## 📂 Estrutura de Diretórios

```
├── public/assets/     # Imagens e arquivos estáticos
src/
├── components/
│   ├── Layout/        # Header, Footer e MenuBar 
│   ├── Artworks/      # Cartões para exibição de obras
│   ├── Home/           # Carrossel usado como banner
├── pages/
│   ├── Home/          # Página inicial
│   ├── Favorites/     # Página de favoritos
│   ├── Artwork/       # Detalhes de uma obra
│   ├── Article/       # Página de artigos relacionados
│   ├── Artworks/      # Página com a galeria completa
├── App.jsx            # Componente principal
```

---

##  Visualização

### **Home Page**
- Carrossel exibindo banners das coleções em destaque.  
- Galeria de obras com cartões interativos.  

### **Detalhe da Obra**
- Exibição de informações detalhadas sobre a obra selecionada.

### **Lista de Favoritos**
- Obras salvas pelo usuário para referência futura.

---

## 📖 Instruções para Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/Yeil-sr/artgallery.git
   cd artgallery
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador:  
   `http://localhost:5173`

---

## 📌 Funcionalidades Futuras

- Integração com API para busca em tempo real.  
- Suporte a temas (modo claro e escuro).  
- Compartilhamento de obras em redes sociais.


