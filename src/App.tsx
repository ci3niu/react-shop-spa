import { Heading, HStack } from '@chakra-ui/react';
import { useEffect, useReducer, useState } from 'react';
import { shopReducer } from './shopReducer';
import Cart from './components/Cart';
import Shop from './components/Shop';

export const ACTIONS = {
	ADD_PRODUCTS: 'add-products',
	ADD_TO_CART: 'add-to-cart',
	REMOVE_FROM_CART: 'remove-from-cart',
};

const App = () => {
	const [state, dispatch] = useReducer(shopReducer, {
		products: [],
		cart: [],
	});

	console.log(state);

	const getData = async () => {
		const res = await fetch('https://dummyjson.com/products?limit=10');
		const resData = await res.json();

		dispatch({
			type: ACTIONS.ADD_PRODUCTS,
			payload: resData.products,
		});
	};

	useEffect(() => {
		getData();
	}, []);

	if (!state) return <Heading>Loading data...</Heading>;

	return (
		<HStack minW='100vw' w='100vw' justifyContent='space-around' p='4'>
			{state.products.length > 0 && <Shop state={state} dispatch={dispatch} />}
			<Cart />
		</HStack>
	);
};

export default App;
