export enum SaleQuery {
    createSale =   `INSERT INTO sale ("productId", "quantity", created) 
                    VALUES($1, $2, now())`
}