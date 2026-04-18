// Importa React e useState
import React, { useState } from 'react';
import './ListaDeTarefas.css';
import './App.css';

// Componente
function ListaDeTarefas() {
  // Estados
  const [tarefas, setTarefas] = useState([]);
  const [textoTarefa, setTextoTarefa] = useState('');

  // Adicionar tarefa
  const adicionarTarefa = () => {
    if (textoTarefa.trim() !== '') {
      setTarefas([...tarefas, textoTarefa]);
      setTextoTarefa('');
    }
  };

  return (
    <div className="ListaDeTarefas">
      <h2>Lista de Tarefas</h2>

      <input
        type="text"
        placeholder="Digite uma tarefa"
        value={textoTarefa}
        onChange={(e) => setTextoTarefa(e.target.value)}
      />

      <button onClick={adicionarTarefa}>Adicionar</button>

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;