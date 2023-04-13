import { Produto } from "./Produto";
import { User } from "./User";

/**
 * DataBase
 * 
 * @class DataBase
 */
export class DataBase {
    users: User[] = []
    categorias: string[]
    produtos: Produto[]

    constructor() {
        this.users.push(this.admin())
        this.users.push(this.user())

        this.categorias = [...this.initCategorias()]
        this.produtos = [...this.iniProdutos()]
    }

    private admin(): User {
        return { nome: "luan", login: "luan", senha: "admin", tipo: "admin" }
    }

    private user(): User {
        return { nome: "maria", login: "maria", senha: "user", tipo: "user" }
    }

    private initCategorias(): string[] {
        let categorias = ["enlatados", "higiene", "cosmeticos"]

        return categorias
    }

    private iniProdutos(): Produto[] {
        let sopa = new Produto("sopa", 22, 33.12, "enlatados")
        let feijao = new Produto("feijao", 22, 33, "enlatados")
        let sabao = new Produto("sabao", 33.88, 12, "higiene")
        let detergente = new Produto("detergente", 33, 12, "higiene")
        let perfume = new Produto("perfume", 12.32, 2, "cosmeticos")

        let produtos = [sopa, feijao, sabao, perfume, detergente]

        return produtos
    }
}