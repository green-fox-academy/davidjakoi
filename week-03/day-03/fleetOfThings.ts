//import { Thing } from "./thing";
import { Fleet } from "./fleet";
import { Thing } from "./thing";

let fleet = new Fleet();
fleet.add(new Thing('Get milk'));
fleet.add(new Thing('Remove the obstacles'));
fleet.print();
console.log(valami.name);

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */

