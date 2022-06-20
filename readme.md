# API REST Aplication

API que realiza o CRUD de uma aplicação de gestão de pontos no mapa.
A API permite a criação de marcadores onde o usuário deve passar a posição (lat, lng) e a opção de mover o marcador (draggable) se ja deve vir como ativo ou não. Após criação, o usuário pode também listar todos os marcadores criados, pode atualizar alguma das propriedades do mesmo (lat, lng ou draggable), pode remover apenas um marcador passando o ID daquele que deseja remover, e pode remover todos os marcadores.

# Iniciando aplicação

Para iniciar a aplicação basta rodar o comando em node: `npm start`
O servidor irá rodar no caminho: [http://localhost:3000/markers](http://localhost:3000/markers)

# Utilizando os Testes

O usuário pode utilizar também o comando de testes, onde os mesmo irão testar todas as rotas com as requisições para saber se o que foi criado esta funcionando da maneira correta.
Para iniciar o teste basta rodar o comando em node: `npm run test`
O servidor irá rodar o banco de dados como teste e irá fazer as requisições que estão no arquivo de routes.test.js
