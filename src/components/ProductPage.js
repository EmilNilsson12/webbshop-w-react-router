import Products from '../data/produkter';

const ProductPage = ({ match }) => {
	const urlId = parseInt(match.params.id, 10);
	const currentProduct = Products.find((product) => product.id === urlId);
	console.log(currentProduct);
	return (
		<div>
			<h2>{currentProduct.prodName}</h2>
			<p>Buy this item for only ${currentProduct.price}!</p>
			<img
				src={`/imgs/${currentProduct.image}`}
				alt='Shoe in stock'
				width='150'
			/>
		</div>
	);
};

export default ProductPage;
