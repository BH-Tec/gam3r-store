import ProdutoItem from '@/components/produto/ProdutoItem'
import { produtos } from '@/core'

export default function Home() {
    return (
        <div className='bg-violet-dark'>
            <div className="grid grid-cols-4 gap-5 container">
                {produtos.map((produto) => (
                    <ProdutoItem key={produto.id} produto={produto} />
                ))}
            </div>
        </div>
    )
}
