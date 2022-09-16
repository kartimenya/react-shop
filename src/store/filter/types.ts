export interface filterState {
  categoryId: number;
  sort: SortType;
}

export interface SortType {
  name: string;
  sortProperty: string;
}
