import { ReducerState } from '../App.types';

export const ACTIONS = {
	ADD_PRODUCTS: 'add-products',
	ADD_TO_CART: 'add-to-cart',
	REMOVE_FROM_CART: 'remove-from-cart',
	CHANGE_QTY: 'change-qty',
};

export const shopReducer = (
	state: ReducerState,
	action: {
		payload: any;
		type: string;
	}
) => {
	switch (action.type) {
		case ACTIONS.ADD_PRODUCTS:
			return { ...state, products: action.payload };
		case ACTIONS.ADD_TO_CART:
			return { ...state, cart: [...state.cart, { ...action.payload }] };
		case ACTIONS.REMOVE_FROM_CART:
			return { ...state, cart: state.cart.filter((item: { id: number }) => item.id !== action.payload.id) };
		case ACTIONS.CHANGE_QTY:
			return {
				...state,
				cart: state.cart.filter((item: { id: number; qty: number }) =>
					item.id === action.payload.id ? (item.qty = action.payload.qty) : item.qty
				),
			};

		default:
			return state;
	}
};
