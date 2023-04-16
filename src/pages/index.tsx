import React from "react"
import { useEffect, useState } from "react"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"
import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Tarefa from "../core/Tarefa"
import axios from "axios"
import Swal from "sweetalert2"

const URL = 'http://192.168.1.130:8080/api/tarefa';

export default function Home() {

  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [tarefa, setTarefa] = useState<Tarefa>(Tarefa.vazio())
  const [tarefaDados, setTarefaDado] = useState([])

  useEffect(() => {
    caregaTabelaDeTarefa()
  }, [])

  function tarefaSelecionada(tarefa: Tarefa) {
    setTarefa(tarefa)
    setVisivel('form')
    console.log(tarefa)
  }

  function novaTarefa() {
    setTarefa(Tarefa.vazio())
    setVisivel('form')
  }

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

  async function tarefaExcluida(tarefa: Tarefa) {
    await axios.delete(URL + '/' + tarefa.id)
      .then(function (response) {
        Swal.fire(
          'Excluída',
          'Tarefa Excluída com Sucesso! 🙅😁',
          'success'
        )
        console.log(response)
        caregaTabelaDeTarefa()
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' Erro ao Excluír Tarefa! 😩😭',
        })
        console.error(error)
      });
  }

  async function alterarTarefa(tarefa: Tarefa) {
    await axios.put(URL + '/' + tarefa.id, {
      titulo: tarefa.titulo,
      descricao: tarefa.descricao
    })
      .then(function (response) {
        Swal.fire(
          'Concluído',
          'Tarefa atualizada com Sucesso! 🙅😁',
          'success'
        )
        console.log(response)
        caregaTabelaDeTarefa()
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' Erro na atualização Tarefa! 😩😭',
        })
        console.error(error)
      });
  }

  async function salvarTarefa(tarefa: Tarefa) {
    await axios.post(URL, {
      titulo: tarefa.titulo,
      descricao: tarefa.descricao
    })
      .then(function (response) {
        Swal.fire(
          'Concluído',
          'Tarefa Cadastrada com Sucesso! 🙅😁',
          'success'
        )
        console.log(response)
        caregaTabelaDeTarefa()
      })
      .catch(function (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: ' Erro ao Cadastra Tarefa! 😩😭',
        })
        console.error(error)
      });
  }

  function mudarTarefa(tarefa: Tarefa) {
    if (tarefa.titulo == '' || tarefa.descricao == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos os campos devem ser preenchidos⚠️',
      })
    } else if (tarefa.id) {
      alterarTarefa(tarefa)
    } else {
      salvarTarefa(tarefa)
    }
  }

  return <>
    <div className={` flex justify-center items-baseline py-4`}>
      <Layout titulo="Tarefas">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao onClick={novaTarefa} className="bg-gradient-to-r from-green-700 to-green-400
               hover:to-green-700 mb-4">
                Adicionar Tarefa
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
            mudarTarefa={mudarTarefa}
            cancelado={() => setVisivel('tabela')} />}
      </Layout>
    </div>
  </>
}