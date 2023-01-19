import { ACTIONS } from './App';

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

		default:
			return state;
	}
};
