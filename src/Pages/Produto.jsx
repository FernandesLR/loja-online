import Header from "../components/Header"
import Footer from '../components/'

export default function Produto({ product}) {

    return(
        <>
        <Header></Header>
        <div className="content-wrap">
            <div className="product-details">
                <img src={product.imagem} alt={product.nome} />
            </div>
            <div className="text">
                <h2>{product.nome}</h2>
                <p>{product.descricao}</p>
                <p>Preço: R$ {product.preco.toFixed(2)}</p>
                <button onClick={() => addCarrinho(product)}>Adicionar ao Carrinho</button>
            </div>
        </div>
        <Footer></Footer>
        </>
    )
}