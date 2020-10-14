import { Store } from './ts/Store';
import { Controller } from './ts/Controller';

const store = new Store('todolisttypescriptstoreid');
const controller = new Controller(store);

controller.initialize();