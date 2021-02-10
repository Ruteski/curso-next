import { GetStaticProps } from 'next';
import api from '../services/api';

interface IProduto {
  id: string;
  title: string;
}

interface ITop10Props {
  produtos: IProduto[];
}

export default function Top10({ produtos }: ITop10Props) {
  return (
    <div>
      <h1>Top 10</h1>


      <ul>
        {produtos.map(p => {
          return (
            <li key={p.id}>{p.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<ITop10Props> = async (context) => {
  const response = await api.get('products');
  const produtos = response.data;

  return {
    props: {
      produtos,
    },
    revalidate: 5, // pagina sera atualizada a cada 5 segundos
  }
}