import { DbResult } from './exdbResult';

const main = async () => {
    try {
            const api = await import('./exapi');
            const result = await api.getData();
            
            const html = await import('./exhtml');
            html.displayClasses(result.schoolClasses);
        } 
    catch (e) {
        console.log(e);
    }
}
main();
