export interface Product {
	id: number;
	thumbnail: string;
	price: number;
	title: string;
}

export interface ReducerState {
	cart: {
		length: number;
		id: number;
		title: string;
		price: number;
		thumbnail: string;
		qty: number;
	}[];

	products: {
		length: number;
		id: number;
		title: string;
		price: number;
		thumbnail: string;
	}[];
}

export interface ReducerDispatch {
	type: string;
	payload: any;
}

export interface ShopAndCartProps {
	state: ReducerState;
	dispatch: (arg0: ReducerDispatch) => void;
}
