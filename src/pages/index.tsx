import { GetServerSideProps } from 'next';
import api from '../services/api';
import { Title } from '../styles/pages/Home';
interface IProduto {
  id: string;
  title: string;
}

interface IHomeProps {
  produtosRecomendados: IProduto[];
}

export default function Home({ produtosRecomendados }: IHomeProps) {
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

export const getServerSideProps: GetServerSideProps<IHomeProps> = async () => {
  const response = await api.get('recommended');
  const produtosRecomendados = response.data;

  return {
    props: {
      produtosRecomendados
    }
  };

}