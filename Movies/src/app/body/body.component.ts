import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Observable, map } from 'rxjs';
import { Movie } from '../app.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.scss',
  providers: [AppService]
})
export class BodyComponent {
  movieValue :string = "";

  // movie$:Observable<Movie[]> | undefined
  movie$:any
  
  constructor(private appService:AppService){
    
  }
  buscar(value:string){
    // this.appservice.getMovieBcyId()
    
 
    if (value) {
      this.appService.getMovieBySearchTitle(value).subscribe(result => {this.movie$ = result;
        console.log(this.movie$)
     }
     )
    }
  }

}
