export interface ColorInfo {
   slug?: string;
   name?: string;
}

export interface ProductInfo {
   slug?: string;
   name?: string;
   price?: number;
   image?: string;
}

export interface Product {
   colorInfo?: ColorInfo;
   productInfo?: ProductInfo;
   quantity?: number;
}
