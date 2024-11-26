

class Aviso {

    constructor(titulo, data, descricao, links) {
        this.titulo = titulo;
        this.data = data;
        this.descricao = descricao;
        this.links = links;

    }

    mostrarAviso() {
        return `Título do aviso: ${this.titulo}\n Date de Postagem: ${this.data}\n Descrição: ${this.descricao} `;
    }
}

// inicializando um objeto a parti da clsse definida
const aviso1 = new Aviso("Jogos escolares 2025", new Date(), " Os jogos escolares de 2025 ja tem data definida, ocorrerão em abril de 2025 ", ["ifce.edu.br", "google.com"]);


console.log(aviso1.mostrarAviso());


                        



