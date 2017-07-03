import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list.component';


@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [MovieListComponent],
  exports: [MovieListComponent],

})
export class MovieListModule { }
