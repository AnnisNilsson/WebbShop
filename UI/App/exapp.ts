import { DbResult } from './dbResult';

const main = async () => {
    try {
            const api = await import('./api');
            const result = await api.getData();
            
            const html = await import('./html');
            html.displayTeachers(result.teachers);
            html.displayClasses(result.schoolClasses);
        } 
    catch (e) {
        console.log(e);
    }
}
main();
