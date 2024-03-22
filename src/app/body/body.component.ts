import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Movie } from '../app.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalStorageService } from '../local-storage.service';


interface Search{
  Search : Movie[];
}


@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss',
    providers: [AppService, LocalStorageService],
    imports: [CommonModule, FormsModule]
})
export class BodyComponent implements OnInit{
  
  movieValue :string = "";

  // movie$:Observable<Movie[]> | undefined
  movie$:any;

  favoritarIcon:boolean = false;

  idFavoritos: Movie[] = [];

 

  

  
  constructor(private appService:AppService){
    
  }
  ngOnInit(): void {
      console.log(localStorage)
  }
  buscar(value:string){
    // this.appservice.getMovieBcyId()
    
 
    if (value) {
      this.appService.getMovieBySearchTitle(value).subscribe(result => {this.movie$ = result;
        
      })
    }
  }

  favoritar(ImdbID:string,title:string){
    console.log()
    
    

  }

removerFav(event:MouseEvent,index:number){
  if(event){
    this.idFavoritos.splice(index,1)
    console.log(this.idFavoritos)

  }


}
searchFav(){
  
 const filmeID = this.idFavoritos.map(movie =>movie.ImdbID)
 console.log(filmeID.at(3))

}
  
  
  setIconFac(value:string){
    if (value){

    }

  }

}
