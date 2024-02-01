export enum inventoryQuery {
    updateStock =  `UPDATE inventory 
                    SET "stock"=$1 
                    WHERE productid=$2`,

    getInventory = `SELECT threshold, stock 
                    FROM inventory 
                    WHERE productid  = $1;`
}