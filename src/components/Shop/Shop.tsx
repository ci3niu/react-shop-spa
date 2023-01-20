import { Box, Grid, GridItem, Image, VStack, Text, HStack } from '@chakra-ui/react';
import { Product, ShopAndCartProps } from '../../App.types';

import { AddBtn, RemoveBtn } from './ItemButtons';

const Shop: React.FC<ShopAndCartProps> = ({ state, dispatch }) => {
	const { products, cart } = state;

	return (
		<VStack h='100%' justifyContent='center'>
			<Grid templateColumns='repeat(5, 1fr)' gap='4'>
				{products.length > 0 &&
					products.map((shopItem: Product) => {
						const { id, thumbnail, price, title } = shopItem;
						return (
							<GridItem key={id} border='1px solid black' borderRadius='1rem' p='4'>
								<VStack h='100%' justifyContent='space-between'>
									<Box h='32' borderRadius='0.5rem' overflow='hidden'>
										<Image src={thumbnail} alt={title} h='100%' objectFit='cover' />
									</Box>
									<HStack w='100%' justifyContent='space-between'>
										<Text size='xs'>{title}</Text>
										<Text fontWeight='bold' alignSelf='flex-start'>
											${price}
										</Text>
									</HStack>

									{cart.some((item) => item.id === id) ? (
										<RemoveBtn shopItem={shopItem} dispatch={dispatch} />
									) : (
										<AddBtn shopItem={shopItem} dispatch={dispatch} />
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
