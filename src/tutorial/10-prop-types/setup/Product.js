import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg';

const Product = ({ name, price, image }) => {
	const url = image && image.url;

	return (
		<article className='product'>
			<img src={url || defaultImage} alt={name || 'default'} />
			<h4>{name || 'default'}</h4>
			<p>{price || 3.99}</p>
		</article>
	);
};

// Product.propTypes = {
// 	image: PropTypes.object.isRequired,
// 	name: PropTypes.string.isRequired,
// 	price: PropTypes.number.isRequired,
// };

// Product.defaultProps = {
// 	image: {
// 		url: defaultImage,
// 	},
// 	name: 'Default Name',
// 	price: 3.99,
// };

export default Product;
