import React from 'react';

function App() {
  return (
    <section>
      <form>
        <input type="text" placeholder="Título" />
        <textarea placeholder="Escreva uma nota..." />
        <button>Criar Nota</button>
      </form>
      <ul>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva uma nota</p>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva uma nota</p>
          </section>
        </li>
        <li>
          <section>
            <header>
              <h3>Título</h3>
            </header>
            <p>Escreva uma nota</p>
          </section>
        </li>
      </ul>
    </section>
  );
}

export default App;
