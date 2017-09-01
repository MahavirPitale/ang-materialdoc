
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {AutoCompleteComponent} from './Form Controls/AutoComplete/autoComplete.component';

import {PageNotFoundComponent} from './Form Controls/pagenotfound/pagenotfound.component'


export const appRoutes: Routes = [
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },
  { path: 'autocomplete', component: AutoCompleteComponent },

  { path: '**', component: PageNotFoundComponent }
    
    
    
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(appRoutes);