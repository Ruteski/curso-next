import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();

  return (
    <div>
      <h1>Produtos</h1>
      <h2>Produto: {router.query.slug}</h2>
    </div>
  )
}