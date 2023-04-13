/**
 * Produtos
 * 
 * @class Produtos
 */
export class Produto {
    nome: string
    valor: number
    estoque: number
    categoria: string

    constructor(
        nome: string,
        valor: number,
        estoque: number,
        categoria: string
    ) {
        this.nome = nome
        this.valor = valor
        this.estoque = estoque
        this.categoria = categoria
    }
}