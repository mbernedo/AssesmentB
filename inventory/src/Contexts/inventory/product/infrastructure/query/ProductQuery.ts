export enum ProductQuery {
    listActiveProducts =   `SELECT * 
                            FROM product 
                            WHERE active=true`,

    getProductDetail = `SELECT * 
                        FROM product
                        WHERE id=$1`,

    createProduct =    `INSERT INTO product ("productCode", "productName", created) 
                        VALUES($1, $2, now())`,

    updateProductName =    `UPDATE product
                            SET "productName"=$1 
                            WHERE id=$2`,

    removeProduct =    `UPDATE product 
                        SET "active"=false 
                        WHERE id=$1`
}