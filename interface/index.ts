export interface Category {
   name?: string;
   slug?: string;
}

export interface Color {
   name?: string;
   slug?: string;
   value?: string;
}

export interface Product {
   name?: string;
   slug?: string;
   categorySlug?: string;
}

export interface ColorOfProduct {
   productSlug?: string;
   colorSlug?: string;
   images?: string[];
}

export interface DescOfProduct {
   desType?: string;
   value?: string;
   width?: number;
   height?: number;
}

export interface DetailOfProduct {
   productSlug?: string;
   name?: string;
   price?: number;
   info?: string;
   infoList?: string[];
   video?: string;
   description?: DescOfProduct[];
}

export interface ColorSumary {
   name?: string;
   value?: string;
   image?: string;
}

export interface ProductSumary {
   slug?: string;
   name?: string;
   price?: number;
   colors?: ColorSumary[];
}

export interface ColorDetail {
   slug?: string;
   name?: string;
   value?: string;
   images?: string[];
}

export interface ProductDetail {
   slug?: string;
   name?: string;
   price?: number;
   info?: string;
   infoList?: string[];
   description?: DescOfProduct[];
   video?: string;
   colors?: ColorDetail[];
}

export interface ProductsByCategory {
   category?: Category;
   products?: ProductSumary[];
}

export interface ProductsMayLike {
   products?: ProductSumary[];
}
