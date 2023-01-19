export interface ShopProps {
	state: {
		cart: {
			map(arg0: (product: Product) => JSX.Element): import('react').ReactNode;
			length: number;
			some(arg0: (item: any) => boolean): import('react').ReactNode;
			id: number;
			title: string;
			price: number;
			thumbnail: string;
		};
		products: {
			length: number;
			map(arg0: (product: Product) => JSX.Element): import('react').ReactNode;
			id: number;
			title: string;
			price: number;
			thumbnail: string;
		};
	};
	dispatch: React.Dispatch<{
		payload: any;
		type: string;
	}>;
}

export interface Product {
	id: number;
	thumbnail: string;
	price: number;
	title: string;
}
