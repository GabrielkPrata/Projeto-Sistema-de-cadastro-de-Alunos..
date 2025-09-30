// funcoes.js - funções reutilizáveis para manipulação da tabela e filtros

/**
 * Atualiza a tabela de alunos.
 * @param {Array<{nome: string, matricula: string, curso: string}>} lista - Lista de alunos.
 * @param {HTMLElement} [tabela=document.querySelector("#tabelaAlunos tbody")] - Corpo da tabela.
 * @returns {void}
 */
export function atualizarTabela(lista, tabela = document.querySelector("#tabelaAlunos tbody")) {
  if (!tabela) return; // Se tabela não existir, encerra função
  tabela.innerHTML = ""; // Limpa tabela

  lista.forEach(aluno => {
    const row = document.createElement('tr'); // Cria linha

    const tdNome = document.createElement('td');
    tdNome.textContent = aluno.nome || "";

    const tdMat = document.createElement('td');
    tdMat.textContent = aluno.matricula || "";

    const tdCurso = document.createElement('td');
    tdCurso.textContent = aluno.curso || "";

    row.appendChild(tdNome);
    row.appendChild(tdMat);
    row.appendChild(tdCurso);

    tabela.appendChild(row);
  });
}

/**
 * Atualiza as estatísticas de alunos.
 * @param {Array<{curso: string}>} alunos - Lista de alunos.
 * @param {HTMLElement} totalAlunosElem - Elemento que mostra total de alunos.
 * @param {HTMLElement} cursosUnicosElem - Elemento que mostra cursos únicos.
 * @returns {void}
 */
export function atualizarEstatisticas(alunos, totalAlunosElem, cursosUnicosElem) {
  if (!totalAlunosElem || !cursosUnicosElem) return;

  totalAlunosElem.textContent = `Total de alunos: ${alunos.length}`;

  const cursos = alunos.map(a => a.curso || "");
  const cursosUnicosSet = new Set(cursos.filter(c => c !== ""));
  cursosUnicosElem.textContent = `Cursos cadastrados: ${cursosUnicosSet.size}`;
}

/**
 * Atualiza as opções de filtro de curso.
 * @param {Array<{curso: string}>} alunos - Lista de alunos.
 * @param {HTMLSelectElement} filtroCursoElem - Elemento select do filtro.
 * @returns {void}
 */
export function atualizarFiltroCursos(alunos, filtroCursoElem) {
  if (!filtroCursoElem) return;

  filtroCursoElem.innerHTML = `<option value="">Filtrar por curso</option>`; // Opção padrão
  const cursos = [...new Set(alunos.map(a => a.curso).filter(Boolean))]; // Cursos únicos
  cursos.forEach(curso => {
    const opt = document.createElement("option");
    opt.value = curso;
    opt.textContent = curso;
    filtroCursoElem.appendChild(opt);
  });
}
