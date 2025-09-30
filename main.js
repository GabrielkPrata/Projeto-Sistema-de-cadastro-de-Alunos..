// main.js - controle principal do sistema de cadastro
import { atualizarTabela, atualizarEstatisticas, atualizarFiltroCursos } from "./funcoes.js";

let alunos = []; // Array que armazena alunos cadastrados

document.addEventListener("DOMContentLoaded", () => {
  // Seleção de elementos do DOM
  const form = document.getElementById("formAluno");
  const tabela = document.querySelector("#tabelaAlunos tbody");
  const buscaInput = document.getElementById("busca");
  const filtroCurso = document.getElementById("filtroCurso");
  const ordenarBtn = document.getElementById("ordenarNome");
  const totalAlunos = document.getElementById("totalAlunos");
  const cursosUnicos = document.getElementById("cursosUnicos");

  const erroNome = document.getElementById("erroNome");
  const erroMatricula = document.getElementById("erroMatricula");
  const erroCurso = document.getElementById("erroCurso");

  /** Limpa mensagens de erro do formulário */
  function limparErros() {
    erroNome.textContent = "";
    erroMatricula.textContent = "";
    erroCurso.textContent = "";
  }

  /**
   * Valida entradas do formulário
   * @param {string} nome - Nome do aluno
   * @param {string} matricula - Matrícula do aluno
   * @param {string} curso - Curso do aluno
   * @returns {boolean} true se válido
   */
  function validarEntrada(nome, matricula, curso) {
    let valido = true;

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
      erroNome.textContent = "O nome deve conter apenas letras.";
      valido = false;
    }

    if (!/^\d+$/.test(matricula)) {
      erroMatricula.textContent = "A matrícula deve conter apenas números.";
      valido = false;
    }

    if (alunos.some(a => a.matricula === matricula)) {
      erroMatricula.textContent = "Essa matrícula já está cadastrada.";
      valido = false;
    }

    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(curso)) {
      erroCurso.textContent = "O curso deve conter apenas letras.";
      valido = false;
    }

    return valido;
  }

  // Evento de envio do formulário
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    limparErros();

    const nome = document.getElementById("nome").value.trim();
    const matricula = document.getElementById("matricula").value.trim();
    const curso = document.getElementById("curso").value.trim();

    if (nome && matricula && curso && validarEntrada(nome, matricula, curso)) {
      alunos.push({ nome, matricula, curso });

      atualizarTabela(alunos, tabela);
      atualizarEstatisticas(alunos, totalAlunos, cursosUnicos);
      atualizarFiltroCursos(alunos, filtroCurso);

      form.reset(); // Limpa formulário
    }
  });

  // Filtrar por busca de nome
  buscaInput.addEventListener("input", function () {
    const termo = this.value.toLowerCase();
    const filtrados = alunos.filter(a => a.nome.toLowerCase().includes(termo));
    atualizarTabela(filtrados, tabela);
  });

  // Filtrar por curso
  filtroCurso.addEventListener("change", function () {
    const curso = this.value;
    const filtrados = curso ? alunos.filter(a => a.curso === curso) : alunos;
    atualizarTabela(filtrados, tabela);
  });

  // Ordenar alunos por nome
  ordenarBtn.addEventListener("click", function () {
    alunos.sort((a, b) => a.nome.localeCompare(b.nome));
    atualizarTabela(alunos, tabela);
  });

  // Inicializa tabela e filtros
  atualizarTabela(alunos, tabela);
  atualizarFiltroCursos(alunos, filtroCurso);
  atualizarEstatisticas(alunos, totalAlunos, cursosUnicos);
});
