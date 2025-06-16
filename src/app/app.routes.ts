import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';

export const routes: Routes = [
    {
        path: "",
        component: FormularioComponent
    },
    {
        path: "form",
        component: FormularioComponent
    },
    {
        path: "galeria",
        component: GaleriaComponent
    }
];
