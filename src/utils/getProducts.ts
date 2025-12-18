import fs from 'fs';
import path from 'path';

export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    sold: number;
}

export function getProducts(): Product[] {
    const filePath = path.join(process.cwd(), 'src/data/products.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const lines = fileContent.trim().split('\n');
    
    // Bỏ qua header row
    return lines.slice(1).map(line => {
        const values = line.split(',');
        return {
            id: parseInt(values[0]),
            name: values[1],
            price: parseInt(values[2]),
            description: values[3],
            image: values[4],
            sold: parseInt(values[5]),
        };
    });
}

// Lấy sản phẩm theo ID
export function getProductById(id: number): Product | undefined {
    const products = getProducts();
    return products.find(product => product.id === id);
}

// Lấy sản phẩm bán chạy nhất (sắp xếp theo sold giảm dần)
export function getBestSellers(limit: number = 5): Product[] {
    const products = getProducts();
    return products
        .sort((a, b) => b.sold - a.sold)
        .slice(0, limit);
}

// Lấy sản phẩm theo khoảng giá
export function getProductsByPriceRange(minPrice: number, maxPrice: number): Product[] {
    const products = getProducts();
    return products.filter(product => product.price >= minPrice && product.price <= maxPrice);
}
