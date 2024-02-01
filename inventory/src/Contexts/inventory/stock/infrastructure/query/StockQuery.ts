export enum StockQuery {
    getProductStock =  `SELECT EXTRACT(MONTH FROM s.created) as monthNumber, p."productCode" , p."productName"
                        FROM sale s 
                        JOIN inventory i 
                        ON s."productId"  = i.productid 
                        JOIN product p 
                        ON s."productId" = p.id
                        WHERE i.stock < i.threshold
                        AND EXTRACT(MONTH FROM s.created) = EXTRACT(MONTH FROM now())
                        GROUP BY EXTRACT(MONTH FROM s.created), p."productCode" , p."productName"`,
}