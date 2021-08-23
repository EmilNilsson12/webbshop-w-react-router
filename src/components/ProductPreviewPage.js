const ProductPreviewPage = ({ prodName, imageUrl }) => {
	return (
		<div className='grid-item'>
			<h4>{prodName}</h4>
			<img src={`./imgs/${imageUrl}`} alt='Shoe in stock' width='60' />
		</div>
	);
};

export default ProductPreviewPage;
