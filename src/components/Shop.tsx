import { Box, Grid, GridItem, Heading, Image, VStack, Text, Button } from '@chakra-ui/react';
import { Product, ShopProps } from '../App.types';
import { ACTIONS } from '../reducers/shopReducer';

const Shop: React.FC<ShopProps> = ({ state, dispatch }) => {
	const { products, cart } = state;

	return (
		<VStack maxW='80%' p='4'>
			<Heading>Shop</Heading>
			<Grid templateColumns='repeat(5, 1fr)' gap='4'>
				{products.length > 0 &&
					products.map((product: Product) => {
						const { id, thumbnail, price, title } = product;
						return (
							<GridItem key={id} border='1px solid black' borderRadius='1rem' px='2' py='1'>
								<VStack>
									<Box boxSize='40' borderRadius='0.5rem' overflow='hidden'>
										<Image src={thumbnail} alt={title} w='100%' objectFit='cover' />
									</Box>
									<Heading size='xs'>{title}</Heading>
									<Text alignSelf='flex-start'>${price}</Text>
									{cart.some((item) => item.id === id) ? (
										<Button
											colorScheme='red'
											onClick={() => {
												dispatch({
													type: ACTIONS.REMOVE_FROM_CART,
													payload: { ...product },
												});
											}}
										>
											Remove from Cart
										</Button>
									) : (
										<Button
											colorScheme='teal'
											onClick={() => {
												dispatch({
													type: ACTIONS.ADD_TO_CART,
													payload: {
														id: id,
														title: title,
														thumbnail: thumbnail,
														price: price,
														qty: 1,
													},
												});
											}}
										>
											Add to Cart
										</Button>
									)}
								</VStack>
							</GridItem>
						);
					})}
			</Grid>
		</VStack>
	);
};

export default Shop;
