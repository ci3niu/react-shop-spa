import { useEffect, useState } from 'react';

import { ShopAndCartProps } from '../../App.types';
import { ACTIONS } from '../../reducers/shopReducer';

import { Heading, VStack, Text, Image, Button, HStack, Box } from '@chakra-ui/react';

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
		<VStack w='100%' h='100%'>
			<Heading size='sm' mb='8'>{`Total: $${total}`}</Heading>
			{cart.length === 0 && <Text>Cart is empty</Text>}

			{cart.map((cartItem) => {
				const { id, thumbnail, title, price, qty } = cartItem;
				return (
					<HStack
						key={id}
						border='1px solid black'
						w='90%'
						borderRadius='0.5rem'
						py='2'
						px='4'
						justifyContent='space-between'
					>
						<Box boxSize='20' borderRadius='0.25rem' overflow='hidden'>
							<Image src={thumbnail} alt={title} h='100%' objectFit='cover' />
						</Box>
						<VStack h='100%' justifyContent='space-between' alignItems='flex-end'>
							<Text>{title}</Text>
							<HStack>
								<Text fontWeight='bold' mr='1'>
									${price}
								</Text>
								<HStack>
									<Button size='sm' onClick={() => handleQtyChange(cartItem.id, cartItem.qty - 1)}>
										-
									</Button>
									<Text>{qty}</Text>
									<Button size='sm' onClick={() => handleQtyChange(cartItem.id, cartItem.qty + 1)}>
										+
									</Button>
								</HStack>
							</HStack>
						</VStack>
					</HStack>
				);
			})}
			{cart.length > 0 && (
				<Button
					colorScheme='red'
					onClick={() => {
						dispatch({
							type: ACTIONS.CLEAR_CART,
							payload: null,
						});
					}}
				>
					Clear Cart
				</Button>
			)}
		</VStack>
	);
};

export default Cart;
