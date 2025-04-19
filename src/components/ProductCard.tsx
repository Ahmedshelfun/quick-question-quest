
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="w-full max-w-sm">
      <CardContent className="pt-4">
        <div className="mb-4 text-lg font-semibold">{product.name}</div>
        <p className="text-sm text-muted-foreground mb-2">{product.description}</p>
        <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
