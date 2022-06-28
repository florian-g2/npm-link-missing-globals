import { autoInjectable, inject, injectable } from 'tsyringe';
import SharedTypes from './SharedTypes.js';

export interface IDeveloper {
    firstName: string;
}

@injectable()
export class Developer implements IDeveloper {
    firstName: string;

    constructor(
        @inject(SharedTypes.DeveloperName) public developerName: string,
    ) {
        this.firstName = developerName;
    }
}

@injectable()
export class Foo {
    constructor(
        @inject(SharedTypes.Developer) public developer: IDeveloper,
    ) {
        console.log(`Hey ${this.developer.firstName}! It's me, Foo!`);
    }
}

@autoInjectable()
export class Bar {
    constructor(
        @inject(SharedTypes.Developer) public developer?: IDeveloper,
    ) {
        console.log(`Hey ${this.developer?.firstName ?? 'undefined'}! It's me, Bar!`);
    }
}