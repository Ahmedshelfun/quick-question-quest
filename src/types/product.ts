
export interface Product {
  id: number;
  name: string;
  price: number;
  category: 'sweets' | 'spices' | 'groceries' | 'beverages';
  description: string;
  imageUrl?: string;
}
