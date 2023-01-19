export const ACTIONS = {
	ADD_PRODUCTS: 'add-products',
	ADD_TO_CART: 'add-to-cart',
	REMOVE_FROM_CART: 'remove-from-cart',
};

export const shopReducer = (
	state: any,
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

		default:
			return state;
	}
};
