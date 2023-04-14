import { Produto } from "../model/Produto";
import { User } from "../model/User";

/**
 * DataBase
 * 
 * @class DataBase
 */
export class DataBase {
    users: User[] = [
        { nome: "luan", login: "luan", senha: "admin", tipo: "user" },
        { nome: "maria", login: "maria", senha: "user", tipo: "admin" }
    ]
    categorias: string[] = [
        "enlatados",
        "higiene",
        "cosmeticos"
    ]
    produtos: Produto[] = [
        new Produto("sopa", 22, 33.12, "enlatados"),
        new Produto("feijao", 22, 33, "enlatados"),
        new Produto("sabao", 33.88, 12, "higiene"),
        new Produto("detergente", 33, 12, "higiene"),
        new Produto("perfume", 12.32, 2, "cosmeticos")
    ]

    constructor(users?: User[], categorias?: string[], produtos?: Produto[]) {
        this.users = users ?? this.users
        this.categorias = categorias ?? this.categorias
        this.produtos = produtos ?? this.produtos
    }
}