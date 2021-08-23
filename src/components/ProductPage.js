const ProductPage = ({ prodName, price, imageUrl }) => {
	return (
		<div>
			<h2>{prodName}</h2>
			<p>Buy this item for only ${price}!</p>
			<img src={`./imgs/${imageUrl}`} alt='Shoe in stock' width='150' />
		</div>
	);
};

export default ProductPage;
