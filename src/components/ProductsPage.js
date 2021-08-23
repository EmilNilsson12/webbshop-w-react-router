import { useState } from 'react';
import ProductPage from './ProductPage';
import productData from '../data/produkter';

const ProductsPage = () => {
	const [btnText, setBtnText] = useState('Show');

	const toggleProductsView = () =>
		btnText === 'Show' ? setBtnText('Hide') : setBtnText('Show');

	return (
		<>
			<h1>Welcome to ProductsPage</h1>
			<details>
				<summary onClick={toggleProductsView}>{btnText} products</summary>
				{productData.map((product) => (
					<ProductPage
						key={product.id}
						prodName={product.prodName}
						price={product.price}
						imageUrl={product.image}
					/>
				))}
			</details>
		</>
	);
};
export default ProductsPage;
