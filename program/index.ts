import '@abraham/reflection';

import { Developer, Foo, Bar } from 'library/index.js';
import SharedTypes from 'library/SharedTypes.js';
import { container } from 'tsyringe';


container.register(SharedTypes.DeveloperName, { useValue: 'Florian' });
container.register(SharedTypes.Developer, { useClass: Developer });
container.register(SharedTypes.Foo, { useClass: Foo });

container.resolve(SharedTypes.Foo);

try {
    new Bar();
} catch (e) {
    console.log('Developer is not auto-injectable into Bar, since the library is using its own global container instance.');
    console.log(e);
}