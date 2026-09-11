1. What was the biggest advantage you noticed when using TypeScript vs. plain JavaScript?

- For me, it's more detailed and contain the needed annotations/interfaces. 

2. Describe a specific error TypeScript caught that JavaScript would have missed.

- Typescript enforces exact interface, if there's a typo on it, it will throw a red squiggly line and stops the application from compiling. As for JavaScript, it will not throw the error which will end up locating the problem manually later on. 

3. What is the difference between an interface and a type alias in TypeScript? When would you use each?

- Interface exclusively used to define the shape of objects and class contracts while type (Alias) can define objects but also unions, intersections, primitives and tuples. Flexible beyond standard object shapes.

4. Why do we use `export` and `import` in TypeScript files?

- It's to manage modules. Export will make it available so other files can use it. As for import, bringing the code in, if needed to use a function or model from a diffent file, get it to pull in. 

5. What happens to interfaces when TypeScript compiles to JavaScript? Why?

- It will be removed because TypeScript designed as strict 'superset' of JavaScript wherein add strong typing on dev phase but follows JavaScript engine to produce lightweight and compatible standard environment after. 

6. If you had to add a `Review` entity (users reviewing products), what would its interface look like? Write it out.

- export interface Review {    
    id: number;  
    userId: number; //Connects to user who wrote it  
    productId: number; //Connects to the product being reviewed  
    rating: number;    
    description: string;  
    isVerifiedPurchase: number;  
    createdAt: Date;
}
