export type SortField = 'name' | 'organization' | 'address' | 'worker' | 'products';
export type SortOrder = 'asc' | 'desc';

export interface User {
  id: number;
  name: string;
  organization: string;
  address: string;
  worker: string;
  products: string;
}

export interface UsersState {
  data: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  sortField: SortField;
  sortOrder: SortOrder;
}