import { HStack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Shop from './components/Shop';

const App = () => {
	const [data, setData] = useState();

	const getData = async () => {
		const res = await fetch('https://dummyjson.com/products?limit=10');
		const resData = await res.json();
		setData(resData.products);
	};

	useEffect(() => {
		getData();
	}, []);

	console.log(data);

	return (
		<HStack minW='100vw' w='100vw' justifyContent='space-around' p='4'>
			{data && <Shop products={data} />}
			<Cart />
		</HStack>
	);
};

export default App;
