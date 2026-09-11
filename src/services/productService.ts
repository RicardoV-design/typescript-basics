import { Product, CreateProductInput } from '../models/product';

let products: Product[] = [
    {
        id:1, 
        name: "MateBook D16", 
        description: "16-inch productivity laptop with a slim and lightweight design", 
        price: 35999, 
        stock: 20,
        category: 'electronics',
        createdAt: new Date("2026-09-11")
    }, 
    {
        id:2, 
        name: "A Gentle Reminder", 
        description: "A reflective exploration of kindness, self-love, and taking care of mental health book", 
        price: 99, 
        stock: 50,
        category: 'books',
        createdAt: new Date("2026-08-26")
    }
]; 

let nextId = 3; 

//GET all products
export function getAllProducts(): Product[] {
    return products; 
}

//GET product by ID
export function getProductById(id: number): Product | undefined {
    return products.find(p => p.id === id);
}

//GET product by category
export function getProductsByCategory(category: Product['category']): Product[] {
    return products.filter(p =>p.category ===category); 
}

//POST create a new product
export function createProduct(input: CreateProductInput): Product {
    const newProduct: Product = {
        id: nextId++, 
        ...input, 
        createdAt: new Date()
    }; 

    products.push(newProduct);
    return newProduct; 
}

//PATCH updating book stocks
export function updateProductStock(id: number, newStock: number): Product | null {
    const product = products.find(p => p.id === id);

    if (!product) {
        return null; 
    }

    if (newStock < 0) {
        throw new Error("Stock cannot be negative"); 
    }

    product.stock = newStock; 
    return product; 
}

//DELETE a product
export function deleteProduct(id: number): boolean {
    const initialLength = products.length; 
    products = products.filter(p => p.id !==id);
    return products.length < initialLength;
}