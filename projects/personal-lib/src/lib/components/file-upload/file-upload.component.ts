import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CommonModule} from '@angular/common';

export interface FileInfo {
  file: File;
  blob: Blob;
}

@Component({
  selector: 'lib-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  @Output() filesUploaded = new EventEmitter<FileInfo[]>();
  uploadedFiles: FileInfo[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    if (files) {
      Array.from(files).forEach((file: File) => {
        this.uploadedFiles.push({
          file: file,
          blob: new Blob([file], { type: file.type })
        });
      });

      this.filesUploaded.emit(this.uploadedFiles);
      console.log('Archivos seleccionados:', this.uploadedFiles);
    }
  }

  removeFile(index: number) {
    this.uploadedFiles.splice(index, 1);
    this.filesUploaded.emit(this.uploadedFiles);
  }
}
