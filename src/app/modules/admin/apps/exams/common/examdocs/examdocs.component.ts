import { Component, OnInit, ViewChild, TemplateRef, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, Form } from '@angular/forms';
import { CampusService } from 'app/modules/service/campus.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { ExamdetailsComponent } from '../examdetails/examdetails.component';

@Component({
  selector: 'app-examdocs',
  templateUrl: './examdocs.component.html',
  styleUrls: ['./examdocs.component.scss']
})
export class ExamdocsComponent implements OnInit {
  @Input() examDetails: any;
  @ViewChild('callAPIDialog') callAPIDialog: TemplateRef<any>;
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();

  docsForm: FormGroup;
  showLoader: boolean = false;
  showLoader2: boolean = false;
  showLoader3: boolean = false;
  Loader: boolean = false;
  addLoader: boolean = false;
  updateLoader: boolean = false;
  updateButton: boolean = false;
  retriveexamData: any;
  examId: any;
  landing_img: any;
  uploaded_img: any;
  Image: any;
  tempDocumentArray2: { file_name: any; file_dir: any; docName: any; DocumentExtn: string; };
  uploaded_supporting_docs1: any;
  uploadDocs1: any;
  image: any;
  file_link: any;
  type: string = "exams"
  type2: string
  localStorageData: any;
  postId: any;
  Imagee: any;
  uploaded: { id: string; imageName: any; };
  multipleExamDocs: any = [];
  multipleExamDocs2: any = [];
  commonDocArray: any = [];
  quetionPaperDocs: any[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private campusService: CampusService,
    public globalService: GlobalService,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    public _route: Router,) { }

  ngOnInit(): void {
    this.docsForm = this._formBuilder.group({
      qusPaperDocument_FrontFilePath: [''],
      qusPaperDocument_FrontFileType: '',
      qusPaperDocument_FrontFileName: '',
      preparationDocument_FrontFilePath: [''],
      preparationDocument_FrontFileType: '',
      preparationDocument_FrontFileName: '',
      SylabusDocument_FrontFilePath: [''],
      SylabusDocument_FrontFileType: '',
      SylabusDocument_FrontFileName: '',
    })

    this.postId = this.examDetails.id
    // alert(this.postId)
    if (this.postId != null) {
      this.updateButton = true
      this.Loader = true
    }

  }

  ngAfterViewInit(): void {
    if ((this.postId != null)) {
      this.getExamDetailsByIddd();
    } else {
      this.postId = JSON.parse(localStorage.getItem("postId"));
    }
  }

  getExamDetailsByIddd() {
    if (this.examDetails.questionpaperPath) {
      this.docsForm.get('qusPaperDocument_FrontFilePath').setValue(this.examDetails.questionpaperPath)
      this.docsForm.get('qusPaperDocument_FrontFileName').setValue(this.examDetails.questionpaper)
    }

    if (this.examDetails.questionpaperPath != '') {
      // alert(8980)
      this.docsForm.get('preparationDocument_FrontFilePath').setValue(this.examDetails.preparationPath)
      this.docsForm.get('preparationDocument_FrontFileName').setValue(this.examDetails.preparation)
    }
    if (this.examDetails.syllabusPath) {
      this.docsForm.get('SylabusDocument_FrontFilePath').setValue(this.examDetails.syllabusPath)
      this.docsForm.get('SylabusDocument_FrontFileName').setValue(this.examDetails.syllabus)
    }

    this.quetionPaperDocs = this.examDetails.questionpaperPaths;
    
    setTimeout(() => { this.Loader = false; }, 500);
  }

  saveDoc() {
    // if (this.docsForm.value.qusPaperDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload question paper document', 'error')
    //   return
    // }
    // if (this.docsForm.value.preparationDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload preparation document', 'error')
    //   return
    // }
    // if (this.docsForm.value.SylabusDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload syllaubs document', 'error')
    //   return
    // }
    this.addLoader = true
    this.postId = JSON.parse(localStorage.getItem("postId"));
    let questionpaper = this.docsForm.value.qusPaperDocument_FrontFileName
    let preparation = this.docsForm.value.preparationDocument_FrontFileName
    let syllabus = this.docsForm.value.SylabusDocument_FrontFileName

    this.campusService.updateExamsDocs(this.postId, this.quetionPaperDocs, preparation, syllabus).subscribe((res) => {
      if (res.response_message == "Success") {
        this.addLoader = false
        Swal.fire({
          text: 'New exam document added successful',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: "#3290d6 !important",
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            this.sendValueToParent();
          }
        });
      } else {
        this.addLoader = false
        Swal.fire('', res.response_message, 'error')
      }
    })
  }

  updateDoc() {
    // if (this.docsForm.value.qusPaperDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload question paper document', 'error')
    //   return
    // }
    // if (this.docsForm.value.preparationDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload preparation document', 'error')
    //   return
    // }
    // if (this.docsForm.value.SylabusDocument_FrontFileName == '') {
    //   Swal.fire('', 'Please upload syllaubs document', 'error')
    //   return
    // }

    let questionpaper = this.docsForm.value.qusPaperDocument_FrontFileName
    let preparation = this.docsForm.value.preparationDocument_FrontFileName
    let syllabus = this.docsForm.value.SylabusDocument_FrontFileName

    this.campusService.updateExamsDocs(this.postId, this.quetionPaperDocs, preparation, syllabus).subscribe((res) => {
      if (res.response_message == "Success") {
        this.addLoader = false
        Swal.fire({
          text: ' Exam document updated successful',
          icon: 'success',
          showCancelButton: false,
          confirmButtonColor: "#3290d6 !important",
          confirmButtonText: 'Ok'
        }).then((result) => {
          if (result.isConfirmed) {
            this.sendValueToParent();
          }
        });
      } else {
        this.updateLoader = false
        Swal.fire('', res.response_message, 'error')
      }
    })
  }


  uploadMultipleDocuments(event, docName, files: FileList, type){
    const formData = new FormData();

    if (docName == 'qusPaperDocument') {
      this.showLoader = true;
      this.quetionPaperDocs = [];
    }

    for (var i = 0; i < event.target.files.length; i++) {
      formData.append('file', event.target.files[i]);
      formData.append('type', type);

    this.campusService.ExamUploadDocs(formData).subscribe(res => {
      if (res.response_message == "success") {
        this.landing_img = res.File;
        this.uploaded_img = res.FileDir;
        let fileType = res.File.split(".");
        fileType = fileType[fileType.length - 1];
        fileType = fileType == "pdf" ? "PDF" : "IMG";
        let formArrayValue: any = this.docsForm.value;
        formArrayValue[docName] = res.File;
        formArrayValue[docName + "FilePath"] = res.FileDir;
        this.tempDocumentArray2 = {
          file_name: docName,
          file_dir: res.FileDir,
          docName: res.File,
          DocumentExtn: "png",
        }
        console.log(this.tempDocumentArray2)

      
          this.showLoader = false;
          // this.docsForm?.get('qusPaperDocument_FrontFilePath')?.setValue(res.FileDir);
          // this.docsForm?.get('qusPaperDocument_FrontFileType')?.setValue(fileType);
          // this.docsForm?.get('qusPaperDocument_FrontFileName')?.setValue(res.File);

          console.log(this.docsForm);
          // console.log(this.tempDocumentArray2);
          this.quetionPaperDocs.push(this.tempDocumentArray2);
        
          console.log(this.quetionPaperDocs);
        this.dialog.closeAll();
      } else {
        this.showLoader = false;
        this.showLoader2 = false;
        this.showLoader3 = false;
        Swal.fire('', res.response_message, 'error');
      }

    });
   

  }
  }

  onFileChange(event, docName, files: FileList, type) {
    const formData = new FormData();
    
    if (docName == 'preparationDocument') {
      this.showLoader2 = true;
    }
    if (docName == 'SylabusDocument') {
      this.showLoader3 = true;
    }

    for (var i = 0; i < event.target.files.length; i++) {
      formData.append('file', event.target.files[i]);
      formData.append('type', type);

    this.campusService.ExamUploadDocs(formData).subscribe(res => {
      if (res.response_message == "success") {
        this.landing_img = res.File;
        this.uploaded_img = res.FileDir;
        let fileType = res.File.split(".");
        fileType = fileType[fileType.length - 1];
        fileType = fileType == "pdf" ? "PDF" : "IMG";
        let formArrayValue: any = this.docsForm.value;
        formArrayValue[docName] = res.File;
        formArrayValue[docName + "FilePath"] = res.FileDir;
        this.tempDocumentArray2 = {
          file_name: docName,
          file_dir: res.FileDir,
          docName: res.File,
          DocumentExtn: "png",
        }
        console.log(this.tempDocumentArray2)
    
        if (docName == 'preparationDocument') {
          this.showLoader2 = false;
          this.docsForm?.get('preparationDocument_FrontFilePath')?.setValue(res.FileDir);
          this.docsForm?.get('preparationDocument_FrontFileType')?.setValue(fileType);
          this.docsForm?.get('preparationDocument_FrontFileName')?.setValue(res.File);
        }
        if (docName == 'SylabusDocument') {
          this.showLoader3 = false;
          this.docsForm?.get('SylabusDocument_FrontFilePath')?.setValue(res.FileDir);
          this.docsForm?.get('SylabusDocument_FrontFileType')?.setValue(fileType);
          this.docsForm?.get('SylabusDocument_FrontFileName')?.setValue(res.File);
        }

        // if (this.tempDocumentArray2.file_name == 'examDocument') {
        //   this.uploaded_supporting_docs1 = this.uploaded = {
        //                                    id: '',
        //                                    imageName:this.tempDocumentArray2.docName,
        //                                    }
        //   // this.multipleExamDocs2.push(this.uploaded_supporting_docs1);
        //   this.uploadDocs1 = this.tempDocumentArray2.file_dir;
        // }
        this.dialog.closeAll();
      } else {
        this.showLoader = false;
        this.showLoader2 = false;
        this.showLoader3 = false;
        Swal.fire('', res.response_message, 'error');
      }
    });
  }
  }

  openImgDialog(img) {
    const dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe((result) => { });
    this.image = img;
  }
  close() {
    this.dialog.closeAll();
  }

  back() {
    this.sendValueToParent2();
  }

  sendValueToParent() {
    this._route.navigate(['apps/exams/examlist']);

  }

  sendValueToParent2() {
    const valueToSend = "1";
    this.valueChanged.emit(valueToSend);
  }

}   