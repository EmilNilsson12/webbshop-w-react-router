import { useState } from 'react';
import { Link } from 'react-router-dom';

import './ProductsPage.css';

import ProductPreviewPage from './ProductPreviewPage';
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
				<div className='grid'>
					{productData.map((product) => (
						<Link to={`/products/${product.id}`} key={product.id}>
							<ProductPreviewPage
								prodName={product.prodName}
								imageUrl={product.image}
							/>
						</Link>
					))}
				</div>
			</details>
		</>
	);
};
export default ProductsPage;
