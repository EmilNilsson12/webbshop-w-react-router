const ProductPreviewPage = ({ prodName, imageUrl }) => {
	return (
		<>
			<h4>{prodName}</h4>
			<img src={`./imgs/${imageUrl}`} alt='Shoe in stock' width='60' />
		</>
	);
};

export default ProductPreviewPage;
