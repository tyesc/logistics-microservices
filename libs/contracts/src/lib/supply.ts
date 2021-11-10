interface SupplyProductDto {
  ean: string;
  name: string;
  description: string;
  purchasePricePerUnit: number;
  quantity: number;
}

export interface SupplyInputDto {
  supplyId: string;
  products: SupplyProductDto[];
}
