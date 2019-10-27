import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HTTPS-App';

  constructor(public AlbumsService:AlbumService){}

  ngOnInit(){
    this.AlbumsService.fetchAlbums();
  }
}
