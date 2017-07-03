import { Injectable } from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";

@Injectable()
export class DataStorageService {

  movies: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase) {
    this.movies = db.list('/movies');
  }

  getAll () : FirebaseListObservable<any> {
    return this.movies = this.db.list('/movies');
  }





}
