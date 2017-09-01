
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AutocompleteDemoComponent } from './autocomplete-demo/autocomplete-demo.component';

export const routes: Routes = [
    { path: '', component: AutocompleteDemoComponent }
    
    
    
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);