
---

##  Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis e responsividade)
- JavaScript (ES6, módulo)
- Sem framework externo

---

##  Como Executar

1. **Clonar ou baixar o projeto** para o seu computador.
2. Certifique-se de que a estrutura de pastas esteja correta e que a imagem `aluno.png` esteja dentro da pasta `images/`.
3. Abra o arquivo `index.html` no navegador (duplo clique funciona na maioria dos navegadores modernos).
4. O sistema estará funcional:
   - Cadastre alunos no formulário
   - Utilize busca, filtro e ordenação
   - Veja as estatísticas atualizarem em tempo real

---

##  Observações

- O projeto utiliza **módulos ES6 (`import/export`)**, portanto alguns navegadores podem exigir que o arquivo seja servido via **servidor local**.  
  - Exemplo de servidor rápido com Python:
    ```bash
    # Python 3
    python -m http.server
    ```
  - Depois abra `http://localhost:8000` no navegador.
- Se o navegador não suportar módulos, o projeto pode não funcionar abrindo apenas o arquivo HTML.

---

## Próximos passos (opcional)

- Salvar os dados em **localStorage** para manter o cadastro após fechar a página.
- Adicionar funcionalidades de **edição e exclusão** de alunos.
- Melhorar acessibilidade e layout visual.

---

Feito com  por Gabriel Prata e Gabriel Aparecido Oliveira
