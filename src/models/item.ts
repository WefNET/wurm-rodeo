export interface Item {
    id: number;
    name: string;
    material: string;
    ql: number;  // Assuming "ql" stands for quality level or similar
    rarity: number;  // Assuming this is a numeric value; adjust if it's a specific enum
    cost: number;
    storageLocation: string;
    sold: boolean;
    soldPrice?: number;  // Optional, as it might not have a value if unsold
    soldTo?: string;  // Optional, as it might not have a value if unsold
    soldDate?: Date;  // Optional; Date type for accurate date handling
    description: string;
    categories: string;  // Array of categories
    cost_description: string;
    casts: string;
}