import ItemDetail from '../itemDetail/ItemDetail'
import './ItemListDetail.style.css'

const ItemListDetail = ({product}) => {
    return (
        <div className='itemDetail row'>
            {product.map((product) => (
            <ItemDetail 
            key={product.id} 
            title={product.title} 
            price={product.price}
            shortdescription={product.shortdescription} 
            description={product.description} 
            category={product.category} 
            stock={product.stock}
            img={product.img}
            />
            
            ))
            }
        </div>
    )
}

export default ItemListDetail;