export default class Tarefa {

    #id: string
    #titulo: string
    #descricao: string

    constructor(titulo: string, descricao: string, id: string = null ){
        this.#titulo = titulo
        this.#descricao = descricao
        this.#id = id
    }

    static vazio(){
        return new Tarefa('','')
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