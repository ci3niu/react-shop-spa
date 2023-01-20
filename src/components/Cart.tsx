import { Heading, VStack, Text, Box, Image, Button, HStack, Container } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ShopAndCartProps } from '../App.types';
import { ACTIONS } from '../reducers/shopReducer';

const Cart: React.FC<ShopAndCartProps> = ({ state, dispatch }) => {
	const [total, setTotal] = useState<Number>();
	const { cart } = state;

	const handleQtyChange = (id: number, qty: number) => {
		dispatch({
			type: ACTIONS.CHANGE_QTY,
			payload: {
				id,
				qty,
			},
		});
	};

	useEffect(() => {
		setTotal(cart.reduce((acc, curr) => acc + curr.price * curr.qty, 0));
	}, [cart]);

	return (
		<VStack w='20%' bgColor='#ddd' alignSelf='flex-start' p='4' h='100vh'>
			<Heading>Cart</Heading>
			<Heading size='sm'>{`Total: $${total}`}</Heading>
			{cart.length > 0 ? <div></div> : <Text>Cart is empty</Text>}
			{cart.map((item) => {
				const { thumbnail, title, price, qty } = item;
				return (
					<VStack border='1px solid black' w='75%' borderRadius='1rem' p='4'>
						<HStack h='16' w='100%' justifyContent='space-between'>
							<Image borderRadius='0.5rem' src={thumbnail} alt={title} h='100%' objectFit='cover' />
							<Heading size='xs'>{title}</Heading>
						</HStack>
						<HStack w='100%' justifyContent='space-between'>
							<Text alignSelf='flex-start' fontWeight='bold'>
								${price}
							</Text>
							<HStack>
								<Button size='xs' onClick={() => handleQtyChange(item.id, item.qty - 1)}>
									-
								</Button>
								<Text alignSelf='flex-end'>{qty}</Text>
								<Button size='xs' onClick={() => handleQtyChange(item.id, item.qty + 1)}>
									+
								</Button>
							</HStack>
						</HStack>
					</VStack>
				);
			})}
		</VStack>
	);
};

export default Cart;
