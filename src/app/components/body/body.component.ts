import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';





@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss',
    providers: [AppService],
    imports: [CommonModule, FormsModule]
})
export class BodyComponent implements OnInit{
  
  isLoading: boolean = false;
  movieValue: string = "";
  movie$: any;
  idFavoritos: string[] = [];
  movieID:string = '';


  constructor(private appService: AppService) {

  }

  ngOnInit(): void {
    for (let id of Object.keys(localStorage)) {
      this.idFavoritos.push(id);
    }
  }

  buscar(value: string) {
    this.isLoading = true;
    if (value) {
      this.appService.getMovieBySearchTitle(value).subscribe(result => {
        this.movie$ = result;
        this.isLoading = false;
      });
    }
  }

  favoritar(imdbID: any, title: any) {
    const fav = !this.idFavoritos.includes(imdbID);

    if (fav) {
      localStorage.setItem(imdbID, title);
      this.idFavoritos.push(imdbID);
    } else {
      localStorage.removeItem(imdbID);
      const i = this.idFavoritos.findIndex(id => id === imdbID);
      this.idFavoritos.splice(i);
    }
  }

  isFavorite(imdbID: any) {
    return this.idFavoritos.includes(imdbID);
  }

  removerFav(event: MouseEvent, index: number) {
    if (event) {
      this.idFavoritos.splice(index, 1);
    }
  }
  caminho(event:Event){
    event.preventDefault;
    
  }

}