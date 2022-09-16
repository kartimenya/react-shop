import { ICartItem } from '../../models';

export interface CartSliseState {
  totalPrise: number;
  totalCount: number;
  items: ICartItem[];
}
