import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import {MatSliderModule} from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, MatInputModule } from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonToggleModule,MatButtonModule,MatBadgeModule,MatChipsModule,MatIconModule,MatAutocompleteModule,MatFormFieldModule,MatProgressSpinnerModule,MatProgressBarModule,MatRadioModule,MatSliderModule,MatCardModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatStepperModule,MatTabsModule,MatSnackBarModule,MatTableModule,MatSelectModule,MatCheckboxModule,MatMenuModule,MatSidenavModule],
    exports: [MatButtonToggleModule,MatButtonModule,MatBadgeModule,MatChipsModule,MatIconModule,MatAutocompleteModule,MatFormFieldModule,MatProgressSpinnerModule,MatProgressBarModule,MatRadioModule,MatSliderModule,MatCardModule,MatExpansionModule,MatDatepickerModule,MatNativeDateModule,MatInputModule,MatStepperModule,MatTabsModule,MatSnackBarModule,MatTableModule,MatSelectModule,MatCheckboxModule,MatMenuModule,MatSidenavModule]
})

export class MaterialModule { }