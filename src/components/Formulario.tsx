import { useState } from "react";
import Entrada from "./Entrada";
import Tarefa from "../core/Tarefa";
import Botao from "./Botao";

interface FormularioProps {
    tarefa: Tarefa
    mudarTarefa?: (tarefa: Tarefa) => void
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
                <Botao onClick={() => props.mudarTarefa?.(new Tarefa(id, titulo, descricao))}
                 className="bg-gradient-to-r from-blue-700 to-blue-400 mr-2 hover:to-blue-700">
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onClick={props.cancelado} className="bg-gradient-to-r from-gray-700 to-gray-400 hover:to-gray-700">
                    Cancelar
                </Botao>
            </div>
        </div>
    )
}