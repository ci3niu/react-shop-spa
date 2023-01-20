import { useEffect, useReducer } from 'react';

import { ACTIONS, shopReducer } from './reducers/shopReducer';
import { ReducerState } from './App.types';

import { Heading, HStack, VStack } from '@chakra-ui/react';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

const App = () => {
	const [state, dispatch]: [ReducerState, React.Dispatch<{ payload: any; type: string }>] = useReducer(shopReducer, {
		products: [],
		cart: [],
	});
	const { products } = state;

	const getData = async () => {
		const res = await fetch('https://dummyjson.com/products?limit=15');
		const resData = await res.json();
		dispatch({
			type: ACTIONS.ADD_PRODUCTS,
			payload: resData.products,
		});
	};

	useEffect(() => {
		getData();
	}, []);

	if (products.length === 0) {
		return (
			<VStack h='100vh' justifyContent='center'>
				<Heading>Loading data...</Heading>;
			</VStack>
		);
	}

	return (
		<HStack w='100vw' h='100vh'>
			{products.length > 0 && (
				<>
					<VStack w='80%' p='4' h='100%'>
						<Heading>Shop</Heading>
						<Shop state={state} dispatch={dispatch} />
					</VStack>
					<VStack w='20%' bgColor='#ddd' p='4' h='100%'>
						<Heading mb='8'>Cart</Heading>
						<Cart state={state} dispatch={dispatch} />
					</VStack>
				</>
			)}
		</HStack>
	);
};

export default App;
