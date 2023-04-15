export default class Tarefa {

    #id: string
    #titulo: string
    #descricao: string

    constructor(id: string , titulo: string, descricao: string ){
        this.#id = id
        this.#titulo = titulo
        this.#descricao = descricao
    }

    static vazio(){
        return new Tarefa('','','')
    }

    get id(){
        return this.#id
    }
    get titulo(){
        return this.#titulo
    }
    get descricao(){
        return this.#descricao
    }

}