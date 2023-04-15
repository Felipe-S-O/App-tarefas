import Tarefa from "../core/Tarefa"
import { iconeIdit, iconeLixo } from "./icones"

interface TabelaProps {
    tarefa: Tarefa[]
    tarefaExcluida?: (tarefa: Tarefa) => void
    tarefaSelecionada?: (tarefa: Tarefa) => void
}

export default function Tabela(props: TabelaProps) {

    const exibirAcoes = props.tarefaExcluida || props.tarefaSelecionada


    function renderizarCabecalho() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Titulo</th>
                <th className="text-left p-4">Descrição</th>
                {exibirAcoes ? <th className="p-4">Ações</th> : false}
            </tr>

        )
    }

    function renderizarDados() {
        return props.tarefa?.map((tarefa, i) => {
            return (
                <tr key={tarefa.id} 
                    className={`${i % 2 === 0 ? 'bg-purple-300' : 'bg-purple-400'}`}>
                    <th className="text-left p-4">{tarefa.id}</th>
                    <th className="text-left p-4">{tarefa.titulo}</th>
                    <th className="text-left p-4">{tarefa.descricao}</th>
                    {renderizarAcoes(tarefa)}
                </tr>
            )
        })
    }

    function renderizarAcoes(tarefa: Tarefa) {
        return (
            <td className="flex justify-center">

                {props.tarefaSelecionada ? (
                    <button onClick={()=> props.tarefaSelecionada?.(tarefa)}
                     className="flex justify-center items-center
                         text-green-600 rounded-full p-2 m-1
                         hover:bg-purple-50 "
                    >{iconeIdit}
                    </button>) : false}

                {props.tarefaExcluida ? (
                    <button onClick={()=> props.tarefaExcluida?.(tarefa)}
                     className="flex justify-center items-center
                    text-red-500 rounded-full p-2 m-1
                    hover:bg-purple-50 " >
                        {iconeLixo}
                    </button>) : false}
            </td>
        )
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className=" text-yellow-100 bg-gradient-to-r from-purple-500 to-purple-800">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}