import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';
import DeleteProduct from './DeleteProduct';
import AddToCart from './AddToCart';
import { useUser } from './User';

export default function Product({ product }) {
    const user = useUser();

    return <ItemStyles>
        <Link href={`/product/${product.id}`}>
            <img 
                src={product?.photo?.image?.publicUrlTransformed} 
                alt={product.name} 
            />
        </Link>
        <Title>
            <Link href={`/product/${product.id}`}>{product.name}</Link>
        </Title>
        <PriceTag>{formatMoney(product.price)}</PriceTag>
        <p>{product?.ageRange} years</p>
        <p>By {product?.author}</p>

        {
            product.inStock < 6 && product.inStock > 0 ? <p className="font-weight-bold" style={{color: product.inStock < 6 && product.inStock > 0 ? "red" : "#8dc63f"}}>Low stock</p> : '' 
        }
        {
            product.inStock < 1 ? <p className="font-weight-bold" style={{color: product.inStock < 1 ? "red" : "#8dc63f"}}>Back in stock soon!</p> : '' 
        }

        {!user && ( 
            <>
                <div className="buttonList">
                    <a href="/signup" prefetch="true"><button className="cart-btn">Buy Item</button></a>
                </div>
            </>
        )}

        {user && ( 
            <>
                {
                    product?.inStock > 1 ? 
                    <div className="buttonList">
                        <AddToCart id={product.id} />
                    </div> : '' 
                }
                <div className="buttonList">
                    <Link href={{
                        pathname: '/update',
                        query: {
                            id: product.id,
                        },
                    }}>
                    <a><button className="btn btn-success">Edit</button></a>
                    </Link>
                    <a><DeleteProduct id={product.id}>Delete Product</DeleteProduct></a>
                </div>
            </>
        )}
        {/* TODO Add to cart button */}
    </ItemStyles>;
}