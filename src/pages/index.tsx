import { useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Tarefa from "../core/Tarefa"

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio())

  const tarefas = [
    new Tarefa('Felipe silva de oliveira  28', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt 108', '15 4'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),
    new Tarefa('Felipe silva de oliveira5678', 'testejshdjhsajdhjashdjshajdhahdsfgsagsdfgsdfgsdfgsdfgfgsdfgsdfgsdohajdlashdlashdkldfgdttt fe', '155'),

  ]

  function tarefaSelecionada(tarefa: Tarefa) {
    setTarefa(tarefa)
    setVisivel('form')
    console.log(tarefa.titulo)
  }

  function tarefaExcluida(tarefa: Tarefa) {
    console.log('Excluir... ' + tarefa.titulo)
  }

  function novaTarefa() {
    console.log(tarefa)
    setTarefa(Tarefa.vazio)
    setVisivel('form')
  }
  function salvarTarefa(tarefa: Tarefa) {
    console.log(tarefa)
    setVisivel('tabela')
  }


  return (
    <div className={` flex  justify-center items-baseline py-4`}>

      <Layout titulo="Tarefas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novaTarefa} className=" mb-4">
                Nova Tarefa
              </Botao>
            </div>
            <Tabela tarefa={tarefas}
              tarefaSelecionada={tarefaSelecionada}
              tarefaExcluida={tarefaExcluida}
            />
          </>
        ) : <Formulario
          tarefa={tarefa}
          tarefaMudou={salvarTarefa}
          cancelado={() => setVisivel('tabela')} />}

      </Layout>
    </div>
  )
}
