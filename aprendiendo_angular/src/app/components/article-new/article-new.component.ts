import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Global } from 'src/app/services/global';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.css'],
  providers: [ArticleService]
})
export class ArticleNewComponent implements OnInit {
  public article!: Article;
  public status!: string;
  public page_title:string;
  public url: string;
  public is_edit:boolean;
  afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png, .gif, .jpeg",
    maxSize: 50,
    uploadAPI: {
      url: Global.url + "/upload-image" ,
    },
    theme: "attachPin",
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: false,
    fileNameIndex: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag N Drop',
      attachPinBtn: 'Sube tu imagen para el artículo...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !',
      sizeLimit: 'Size Limit'
    }
  };

  constructor(private _articleService: ArticleService, private _route: ActivatedRoute, private _router: Router) {
    this.article = new Article('', '', '', null, '');
    this.page_title = "Crear artículo";
    this.url = Global.url;
    this.is_edit = true;
    
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this._articleService.create(this.article).subscribe(
      response => {
        if (response.status == 'success') {
          this.status = 'success';
          this.article = response.article;
          Swal.fire(  'Artículo creado',  'El artículo se ha creado correctamente',  'success');
          this._router.navigate(['/blog']);
        } else {
          this.status = 'error';
        }

      },
      error => {
        console.log(error);
        this.status = 'error';
      }
    )
  }
  imageUpload(data:any){
    this.article.image = data.body.image;
  }

}
