import { Box, Grid, GridItem, Heading, Image, VStack, Text, Button } from '@chakra-ui/react';

interface ShopProps {
	products: {
		map(arg0: (product: Product) => JSX.Element): import('react').ReactNode;
		id: number;
		title: string;
		price: number;
		thumbnail: string;
	};
}
interface Product {
	id: number;
	thumbnail: string;
	price: number;
	title: string;
}

const Shop: React.FC<ShopProps> = ({ products }) => {
	return (
		<VStack maxW='80%' p='4'>
			<Heading>Shop</Heading>
			<Grid templateColumns='repeat(5, 1fr)' gap='4'>
				{products &&
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
									<Button colorScheme='teal'>Add to Cart</Button>
									<Button colorScheme='red'>Remove from Cart</Button>
								</VStack>
							</GridItem>
						);
					})}
			</Grid>
		</VStack>
	);
};

export default Shop;
