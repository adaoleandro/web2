/* 
destructuring: usados para desestruturar dados agregados em  variaveis independentes.

*/
// Usando destructuring em objetos (uso mais comuns)

const aviso = {
    titulo: "Jogos escolares 2025 ",
    date: new Date(),
    descricao: " Os jogos escolares de 2025 ja tem data definida, ocorrerão em abril de 2025 ",
    links: ["ifce.edu.br", "google.com"],
   
    mostrarAviso: function() {

        return `Título do aviso: ${this.titulo}\n Date de Postagem: ${this.data}\n Descrição: ${this.descricao} `;
    }
}

//console.log(aviso.mostrarAviso());

// Usando destructuring em objetos (uso mais comuns)

//let titulo = aviso.titulo;
//let descricao = aviso.descricao;

let { titulo, descricao} = aviso;

console.log(titulo, descricao );







                        



