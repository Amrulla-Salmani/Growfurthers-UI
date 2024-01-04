import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { HydrationFeatureKind } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MatDialog } from '@angular/material/dialog'
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{
  receivedData: any;
  location: string = '';
  checkInDate: Date = new Date;
  checkOutDate: Date = new Date;
  numberOfAdults: number = 1;
  numberOfChildren: number = 1;
  roomType: string = '';
  selectedAmenities: string[] = [];
  amenitiesList: string[] = [];
  hotelsList: any[] = [];
  constructor(private sharedDataService: SharedDataService,private authService: AuthService,private dialog: MatDialog){}

  isLoggedIn: boolean = false;

  ngOnInit() {
    this.sharedDataService.data$.subscribe(data => {
      this.receivedData = data;
      this.location = this.receivedData.location
      this.checkInDate = this.receivedData.checkInDate
      this.checkOutDate = this.receivedData.checkOutDate
      this.numberOfAdults = this.receivedData.noOfAdults
      this.numberOfChildren = this.receivedData.noOfChildren
      this.roomType = this.receivedData.roomType
      this.selectedAmenities = this.receivedData.selectedAmenities
    });
    this.amenitiesList = this.selectedAmenities;

    this.authService.getHotelsList(this.receivedData).subscribe(res => {
      // console.log("Response from API:", JSON.stringify(res, null, 2));
      this.hotelsList = res;
    })
  }

  List = [
    {
      id: '1',
      hotelname: 'Grand Hyatt',
      location: 'Pune,VimanNagar',
      Desc: 'Grand Hyatt with All Amenities',
      checkIn: '11:00 AM',
      checkOut: '09:00 AM',
      image: 'assets\\images\\Hyatt.jpg'
    },
    {
      id: '2',
      hotelname: 'Novotel',
      location: 'Pune,VimanNagar',
      Desc: 'All Services and All Amenities',
      checkIn: '11:00 AM',
      checkOut: '09:00 AM',
      image: 'assets\\images\\Novotel.jpg'
    },
    {
      id: '3',
      hotelname: 'Brookside',
      location: 'Pune,',
      Desc: 'Best Services',
      checkIn: '11:00 AM',
      checkOut: '09:00 AM',
      image: 'assets\\images\\Brookside.jpg'
    }
  ];
  Locations = [
    {
      loc: 'Pune'
    },
    {
      loc: 'Mumbai'
    },
    {
      loc: 'Delhi'
    }
  ];

  item = {
    rating: 4 // Sample rating value, replace with your actual data
  };

  generateStarArray(rating:  number) {
    const starArray = [];
    for (let i = 1; i <= 5; i++) {
      starArray.push(i <= rating ? 'filled' : 'empty');
    }
    return starArray;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '300px',
    });
    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Dialog closed with result:', result);
    // });
  }

  getLoginstatus(){
    this.isLoggedIn = this.sharedDataService.getLoginStatus();
    return this.isLoggedIn
    
  }
}
