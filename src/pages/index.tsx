import { useEffect, useState } from 'react';
import api from '../services/api';
import { Title } from '../styles/pages/Home';

interface IProduto {
  id: string;
  title: string;
}

export default function Home() {
  const [produtosRecomendados, setProdutosRecomendados] = useState<IProduto[]>([]);

  useEffect(() => {
    fetch('http://localhost:3333/recommended').then(response => response.json().then(data => setProdutosRecomendados(data)));

  }, []);

  return (
    <div>
      <section>
        <Title>
          Produtos
        </Title>

        <ul>
          {produtosRecomendados.map(p => {
            return (
              <li key={p.id}>{p.title}</li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
