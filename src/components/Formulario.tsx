import { useState } from "react";
import Entrada from "./Entrada";
import Tarefa from "../core/Tarefa";
import Botao from "./Botao";

interface FormularioProps {
    tarefa: Tarefa
    tarefaMudou?: (tarefa: Tarefa) => void
    cancelado?: () => void

}

export default function Formulario(props: FormularioProps) {
    const id = props.tarefa?.id
    const [titulo, setTitulo] = useState(props.tarefa?.titulo ?? '')
    const [descricao, setDescricao] = useState(props.tarefa?.descricao ?? '')


    return (
        <div>
            {id ? (
                <Entrada texto="Código" valor={id} />
            ) : false}
            <Entrada texto="Titulo" valor={titulo} valorMudou={setTitulo} />
            <Entrada texto="Descrição" valor={descricao} valorMudou={setDescricao} />

            <div className="flex justify-end mt-7">
                <Botao onClick={() => props.tarefaMudou?.(new Tarefa(titulo, descricao, id))}
                 className="bg-gradient-to-r from-blue-400 to-blue-700 mr-2 ">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className="bg-gradient-to-r from-gray-400 to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}