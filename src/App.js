import { useState } from 'react';

function App(props) {
  return (
    <>
      <input name="usuario" id="usuario" className="usuarioInput" placeholder="Usuário" />
      <button>Pesquisar</button>
    </>
  );
}

export default App;