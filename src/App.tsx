import { Heading, HStack } from '@chakra-ui/react';
import { useEffect, useReducer } from 'react';
import { ACTIONS, shopReducer } from './reducers/shopReducer';
import Cart from './components/Cart';
import Shop from './components/Shop';
import { ReducerState } from './App.types';

const App = () => {
	const [state, dispatch]: [ReducerState, React.Dispatch<{ payload: any; type: string }>] = useReducer(shopReducer, {
		products: [],
		cart: [],
	});

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

	if (state.products.length === 0) return <Heading>Loading data...</Heading>;

	return (
		<HStack w='100vw' justifyContent='space-between'>
			{state.products.length > 0 && (
				<>
					<Shop state={state} dispatch={dispatch} />
					<Cart state={state} dispatch={dispatch} />
				</>
			)}
		</HStack>
	);
};

export default App;
