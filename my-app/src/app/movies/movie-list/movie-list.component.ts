import { Component, OnInit } from '@angular/core';
import {DataStorageService} from "../../shared/data-storage.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
  providers: [DataStorageService]
})
export class MovieListComponent implements OnInit {
  movies:Array<Object>

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
    console.log("helloml");
    this.dataStorageService.getAll()
      .subscribe(res => {
        console.log(res);
        this.movies = res});


    //console.log(this.movies);


     /* .subscribe(snapshots => {
        snapshots.forEach(snapshot => {
           let movies =snapshot.val();
           console.log(movies);
           //return movies;
        });

      })

      */


  }

}
