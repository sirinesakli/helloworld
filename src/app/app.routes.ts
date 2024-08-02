import { Routes } from '@angular/router';
import { GoodbyeComponent } from './goodbye/goodbye.component';
import { Helloworldcomponent } from './hello-world/hello-world.component';

export const routes: Routes = [
    {path :'',component:Helloworldcomponent},
    {path :'goodby',component:GoodbyeComponent}
];
