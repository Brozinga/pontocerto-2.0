module.exports = {
  async GetAllByUserId(userId) {
        return [
            {
              "_id": "5e6ee6db1d4a4f491c7a3fda",
              "description": "CRIANDO UMA API",
              "userId": "5e5c4ae96365f441dcbb64c9",
              "entryTime": "2020-03-16T02:39:03.028Z",
              "exitTime": "2020-03-16T02:39:03.028Z",
              "visible": true,
              "createdAt": "2020-03-16T02:38:13.337Z",
              "__v": 0
            },
            {
              "_id": "5e6ee7ccc479a650e064ba1c",
              "description": "ADICIONANDO TAREFAS PARA TESTES",
              "userId": "5e5c4ae96365f441dcbb64c9",
              "entryTime": "2020-03-16T02:39:03.028Z",
              "exitTime": "2020-03-16T02:39:03.028Z",
              "visible": true,
              "createdAt": "2020-03-16T02:43:21.152Z",
              "__v": 0
            }
          ]
    },

    async GetById(Id) {
      return  {}
    },

    async GetAllByUserId () {
      return {}
    }
}