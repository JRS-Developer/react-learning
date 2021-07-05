import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders

const calculateMostExpensive = (data) => {
	console.log('Hello');
	return (
		data.reduce((total, item) => {
			const price = item.fields.price;
			if (price >= total) {
				total = price;
			}
			return total;
		}, 0) / 100
	);
};

const Index = () => {
	const { products } = useFetch(url);
	const [count, setCount] = useState(0);
	const [cart, setCart] = useState(0);

	// *useCallBack permite que al pasar una funcion como prop a componentes hijos, pues que al cambiar el estado pues que compruebe que el valor haya cambiado y en ese caso si rerenderizar. Es similar a memmo pero con funciones.

	// *Usando useCallBack
	const addToCart = useCallback(() => {
		setCart(cart + 1);
	}, [cart]);

	// *Sin usar useCallBack. Revisa la consola en Developer Tools para ver la diferencia

	// const addToCart = () => {
	// 	setCart(cart + 1);
	// };

	// *useMemo almacena el dato que se obtiene de una funcion entre renderizados, si el dato que esta en dependencias en este caso es: [products], si cambia pues se ejecuta la funcion, sino no.
	const MostExpensive = useMemo(
		() => calculateMostExpensive(products),
		[products]
	);

	return (
		<>
			<h1>Count : {count}</h1>
			<button className='btn' onClick={() => setCount(count + 1)}>
				click me
			</button>
			<h1 style={{ marginTop: '1rem' }}>cart : {cart}</h1>
			<h1>Most Expensive : {MostExpensive}</h1>
			<BigList products={products} addToCart={addToCart} />
		</>
	);
};

// *React.memo permite evitar el rerenderizado cada vez que se ejecute el useState del objecto padre.
// *SOLO se va a rerenderizar cuando el prop que le estamos pasando al componente cambie, en este caso es {products}

const BigList = React.memo(({ products, addToCart }) => {
	useEffect(() => {
		console.log('Hola, yo me voy a repetir');
	});
	return (
		<section className='products'>
			{products.map((product) => {
				return (
					<SingleProduct
						key={product.id}
						{...product}
						addToCart={addToCart}
					></SingleProduct>
				);
			})}
		</section>
	);
});

const SingleProduct = ({ fields, addToCart }) => {
	let { name, price } = fields;
	price = price / 100;
	const image = fields.image[0].url;

	useEffect(() => {
		console.count('Hola, yo me voy a repetir');
	});

	return (
		<article className='product'>
			<img src={image} alt={name} />
			<h4>{name}</h4>
			<p>${price}</p>
			<button onClick={addToCart}>Add to cart</button>
		</article>
	);
};
export default Index;
