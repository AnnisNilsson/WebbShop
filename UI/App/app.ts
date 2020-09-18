import { DbResult } from './dbResult';
import '../event';

const main = async () => {
    try {
        const api = await import('./api');
        const result = await api.getData();
        const html = await import('./html');
            
            html.displayCustomers(result.customers);
            html.displayCategories(result.categories);
            html.displayBasicCart(result.basicCarts);
            html.displayProduct(result.products);
        } 
    catch (e) {
        console.log(e);
    }
}
main();
