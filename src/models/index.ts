export interface IRoll {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  ingredients: string;
  weight: string;
}

export interface ICartItem extends IRoll {
  count: number;
}
