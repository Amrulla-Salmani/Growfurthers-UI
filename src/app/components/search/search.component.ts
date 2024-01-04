import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, map, of, startWith, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { __addDisposableResource } from 'tslib';
import { DateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})

export class SearchComponent implements OnInit {

  minDate: Date = new Date;
  constructor(private authService: AuthService,private sharedDataService: SharedDataService,private dateAdapter: DateAdapter<Date>) {
    this.getRoomsType();
    this.getAmenities();
    this.getCity();
    // this.dateAdapter.setLocale("en-US");
    this.minDate = new Date;
    // alert(this.minDate)
  }

  ngOnInit() {
    this.formCityList = this.searchbar.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || '  '))
    );
  }

  searchHotelsubmitted() {
    const dataToSend = {
      location: this.location,
      roomType: this.roomType,
      selectedAmenities: this.selectedAmenities
      
    };
    console.log(this.selectedAmenities)
    this.sharedDataService.getSearchCompData(dataToSend);
  }

  //#region Form Control Bindings
  searchbar = new FormControl();
  amenities = new FormControl('');
  roomtypeControl = new FormControl();
  //#endregion

  //#region DB data Variables
  formCityList: Observable<any[]> = of([]);
  dbcityList: any[] = [];
  dbroomList: any[] = [];
  dbamenitiesList: any[] = [];
  //#endregion

  //#region Variables to Store Form Values
  location: any[] = [];
  checkInDate: Date = new Date();
  checkOutDate: Date = new Date();
  numberOfAdults: number = 1;
  numberOfChildren: number = 1;
  roomType: string = '';
  selectedAmenities: string[] = [];
  //#endregion

  //#region Functions for Retrieving Data from Form
  setLocation(city: any) {
    console.log(city)
    this.location = city;
  }
  setRoomType(roomType: any) {
    this.roomType = roomType;
  }
  //#endregion

  //#region Functions for Retrieving Data from Database
  getCity(): void {
    this.authService.getCityData().subscribe((data) => {
      this.dbcityList = data;
    });
  }

  getRoomsType() {
    this.authService.getRoomType().subscribe((data) => {
      this.dbroomList = data;
    });
  }

  getAmenities() {
    this.authService.getAmenities().subscribe((data) => {
      this.dbamenitiesList = data;
    });
  }
  //#endregion

  //#region Anonymous Function
  private _filter(value: any): any[] {
    if (!value) {
      return this.dbcityList.map((city) => city.cityName);
    }
    const filterValue = value.toLowerCase();
    const filteredCities = this.dbcityList.filter((city) => {
      const cityNameLower = city.cityName.toLowerCase();
      return cityNameLower.includes(filterValue);
    });
    return filteredCities.map((city) => city.cityName);
  }
  //#endregion
}
