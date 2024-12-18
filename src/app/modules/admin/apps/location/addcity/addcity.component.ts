import { Component, OnInit,ViewChild ,TemplateRef} from '@angular/core';
import { FormBuilder, FormGroup, Validators,NgForm } from '@angular/forms';
import { CampusService } from 'app/modules/service/campus.service'
import { FuseValidators } from '@fuse/validators';
import { GlobalService } from 'app/modules/service/global.service';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addcity',
  templateUrl: './addcity.component.html',
  styleUrls: ['./addcity.component.scss']
})
export class AddcityComponent implements OnInit {

  cityForm : FormGroup; 
  showLoader: boolean = false;
  addLoader: boolean = false;
  updateLoader : boolean = false;
  updateButton : boolean = false;
  stateLoader : boolean = false;
  Loader : boolean = false;
  cityId: any;
  retriveData: any;
  countryListData: any;
  page: number = 1;
  pageSize: number = 10;
  columnIndex: number = 1;
  startNum: number = 1;
  sortValue: string = "asc";
  search: string = "";
  isChecked: any;
  stateListData: any;
  countryId: any;

  constructor(
    private _formBuilder: FormBuilder,
    private campusService : CampusService,
    public globalService: GlobalService,
    public dialog: MatDialog,
    public _activatedroute: ActivatedRoute,
    public _route: Router, ) { }

    ngOnInit(): void {
      this.cityForm = this._formBuilder.group({
        country: ['',Validators.required],
        state: ['',Validators.required],
        city: ['',[Validators.required,Validators.minLength(3), Validators.maxLength(150),]],
        menu: [0,Validators.required]
      })
  
    const routeParams = this._activatedroute.snapshot.params;
    if (routeParams.cityId) {
      this.Loader = true
      this.cityId = routeParams.cityId;
    }

    this.getCountryList()
  }

  updateTopMenuValue(event: any) {
    this.isChecked = event?.checked;
    this.cityForm.get('menu').setValue(this.isChecked ? 1 : 0);
  }
  
  ngAfterViewInit(): void {
    if ((this.cityId != '' && this.cityId != undefined)) {
      setTimeout(() => { this.getCityDetailsById(); }, 1000);
    }
  }

  getCountryList(){
    this.campusService.getCountryList(this.page,this.pageSize,this.startNum,this.columnIndex,this.sortValue,this.search).subscribe((res) =>{
      this.countryListData = res.data;
    });
  }

  getStateDetailsByCntId(){
    this.countryId = this.cityForm.value.country
    if(this.countryId == ''){
      this.countryId = this.retriveData?.countryid
    }
    this.stateLoader = true
    this.campusService.getStateDetailsByCntId(this.countryId).subscribe((res) =>{
    this.stateListData = res.response_data;
    this.stateLoader = false
  
     //state
     let state
     this.stateListData.forEach((item) => {
       if (item.id == this.retriveData?.stateid) {
         state = item.id;
       }
     });
     this.cityForm.get('state').setValue(state)
    });
  }

 
  
  getCityDetailsById(){
    this.Loader = false
    this.updateButton = true  
    this.campusService.getCityDetailsById(this.cityId).subscribe((res) =>{
      if(res.response_message == "Success") { 
      this.retriveData = res.response_data

     //country
    let cntry;
    this.countryListData.forEach((item) => {
    if (item.id == this.retriveData?.countryid) {
      cntry = item.id;
    }
    });
    this.cityForm.get('country').setValue(cntry);

    //state
    // this.getStateDetailsByCntId();
      
    this.cityForm.get('city').setValue(this.retriveData?.city)

    if(this.retriveData?.view_in_menu == 1){
      this.cityForm.get('menu').setValue(1)
    }else{
      this.cityForm.get('menu').setValue(0)
    }
    
    
      }
    })
  }

 

  insertCityDetails(){
    if(this.cityForm.status == "INVALID"){
      this.cityForm.markAllAsTouched();
      Swal.fire('', 'Please fill all mandatory data', 'error')
        return
     }else{
  
    this.addLoader = true
    let countryId = this.cityForm.value.country
    let stateid = this.cityForm.value.state
    let city = this.cityForm.value.city.charAt(0).toUpperCase() + this.cityForm.value.city.slice(1)
    let menu =  this.cityForm.value.menu
    this.campusService.insertCityDetails(city,countryId,stateid,menu).subscribe((res) =>{
      if(res.response_message == "Success") {                                
      this.addLoader = false  
      Swal.fire({
        text:  'New city added successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this._route.navigate(['apps/location/city']);
        } 
      });
      }else{
        this.addLoader = false 
        Swal.fire('', res.response_message, 'error');
      }
    })
  }
  }

  updateCityDetails(){
    if(this.cityForm.status == "INVALID"){
      this.cityForm.markAllAsTouched();
      Swal.fire('', 'Please fill all mandatory data', 'error')
        return
     }else{
  
    this.addLoader = true
    let countryId = this.cityForm.value.country
    let stateid = this.cityForm.value.state
    let city = this.cityForm.value.city.charAt(0).toUpperCase() + this.cityForm.value.city.slice(1)
    let menu =  this.cityForm.value.menu
    this.campusService.updateCityDetails(this.cityId,city,countryId,stateid,menu).subscribe((res) =>{
      if(res.response_message == "Success") {                                
      this.addLoader = false  
      Swal.fire({
        text:  'City updated successful',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: "#3290d6 !important",
        confirmButtonText: 'Ok'
      }).then((result) => {
        if (result.isConfirmed) {
          this._route.navigate(['apps/location/city']); 
        } 
      });
      }else{
        this.addLoader = false 
        Swal.fire('', res.response_message, 'error');
      }
    })
  }
  }

  back(){
    this._route.navigate(['apps/location/city']);
  }
}
