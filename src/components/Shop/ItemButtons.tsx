import { Button } from '@chakra-ui/react';
import { Product, ReducerDispatch } from '../../App.types';
import { ACTIONS } from '../../reducers/shopReducer';

interface BtnProps {
	shopItem: Product;
	dispatch: (arg0: ReducerDispatch) => void;
}

export const AddBtn: React.FC<BtnProps> = ({ shopItem, dispatch }) => {
	const { id, thumbnail, price, title } = shopItem;

	return (
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
	);
};

export const RemoveBtn: React.FC<BtnProps> = ({ shopItem, dispatch }) => {
	const { id, thumbnail, price, title } = shopItem;

	return (
		<Button
			colorScheme='red'
			onClick={() => {
				dispatch({
					type: ACTIONS.REMOVE_FROM_CART,
					payload: { ...shopItem },
				});
			}}
		>
			Remove from Cart
		</Button>
	);
};
