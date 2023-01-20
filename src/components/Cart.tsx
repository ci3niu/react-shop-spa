import { Heading, VStack, Text, Box, Image } from '@chakra-ui/react';
import { ShopAndCartProps } from '../App.types';

const Cart: React.FC<ShopAndCartProps> = ({ state, dispatch }) => {
	const { cart } = state;

	return (
		<VStack w='20%' bgColor='#ddd' alignSelf='flex-start' p='4' h='100vh'>
			<Heading>Cart</Heading>
			<Heading size='sm'>Total: $</Heading>
			{cart.length > 0 ? <div></div> : <Text>Cart is empty</Text>}
			{cart.map((item) => {
				const { thumbnail, title, price } = item;
				return (
					<VStack border='1px solid black' w='75%' borderRadius='1rem' p='4'>
						<Box boxSize='20' borderRadius='0.5rem' overflow='hidden'>
							<Image src={thumbnail} alt={title} w='100%' objectFit='cover' />
						</Box>
						<Heading size='xs'>{title}</Heading>
						<Text alignSelf='flex-start'>${price}</Text>
					</VStack>
				);
			})}
		</VStack>
	);
};

export default Cart;
