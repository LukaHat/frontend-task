export interface Price {
  amount: number;
  currency: string;
  measureUnit: string;
}

export interface ProductInfo {
  id: number;
  name: string;
  image: string;
  price: Price;
  quantity: number;
}
