import React from "react"
import { useEffect, useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Tarefa from "../core/Tarefa"
import axios from "axios"

const URL = 'http://192.168.1.7:8080/api/tarefa';

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio())
  const [tarefaDados, setTarefaDado] = useState([])

  useEffect(() => {
    caregaTabelaDeTarefa()
  }, [])

  async function caregaTabelaDeTarefa() {
    await axios.get(URL)
      .then((response) => {
        setTarefaDado(response.data)
        console.log('🚀 Consulta Finalizada com Sucesso! 🙅😁')
        console.log(response)
      })
      .catch((error) => {
        console.log('🚀 Erro ao Consultar Api! 😩😭')
        console.error(error)
      })
    setVisivel('tabela')
  }


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
    if (tarefa.titulo == '' || tarefa.descricao == '') {
      alert('Todos os campos devem ser preenchidos ⚠️')
    } else {
      axios.post(URL, {
        titulo: tarefa.titulo,
        descricao: tarefa.descricao
      })
        .then(function (response) {
          console.log('🚀 Tarefa Cadastrada com Sucesso! 🙅😁')
          console.log(response)
          caregaTabelaDeTarefa()
        })
        .catch(function (error) {
          console.log('🚀 Erro ao Consultar Api! 😩😭')
          console.error(error)
        });
      }
  }


  return (
    <div className={` flex justify-center items-baseline py-4`}>

      <Layout titulo="Tarefas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novaTarefa} className=" mb-4">
                Nova Tarefa
              </Botao>
            </div>
            <Tabela tarefa={tarefaDados}
              tarefaSelecionada={tarefaSelecionada}
              tarefaExcluida={tarefaExcluida}
            />
          </>
        ) :
          <Formulario
            tarefa={tarefa}
            tarefaMudou={salvarTarefa}
            cancelado={() => setVisivel('tabela')} />}
      </Layout>
    </div>
  )
}
