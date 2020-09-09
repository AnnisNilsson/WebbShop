import {Teacher} from './teacher';
import {SchoolClass} from './schoolClass';

export class DbResult {
    private _teachers: Array <Teacher> = new Array <Teacher> ();
    public get teachers(): Array<Teacher> {
        return this._teachers;
    }
    public set teachers(teachers: Array <Teacher>) {
        this._teachers = teachers;
    }

    private _schoolClasses: Array <SchoolClass> = new Array <SchoolClass> ();
    public get schoolClasses(): Array<SchoolClass> {
        return this._schoolClasses;
    }
    public set schoolClasses(schoolClasses: Array <SchoolClass>) {
        this._schoolClasses = schoolClasses;
    }
}