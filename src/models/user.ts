export interface User {
    id: number;
    name: string;
    email: string; 
    age?: number; 
    isActive: boolean; 
    createdAt: Date;
}

export interface CreateUserInput {
    name: string; 
    email: string; 
    age?: number; 
}

export interface UpdateUserInput {
    name?: string; 
    email?: string; 
    age?: number; 
    isActive?: boolean; 
}
