import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  currentuser: BehaviorSubject<any> = new BehaviorSubject(null);
  baseServiceURL = "https://localhost:7258/api/";
  // baseServiceURL = "http://api.growfurthers.com/api/";
  jwtHelperService = new JwtHelperService();

  getCityData(): Observable<any[]> {
    console.log("hello from getcitydata")
    return this.http.get<any[]>(this.baseServiceURL + "Hotels/GetCity");
  }

  getRoomType(): Observable<any[]> {
    return this.http.get<any[]>(this.baseServiceURL + "Hotels/GetRooms");
  }

  getAmenities(): Observable<any[]> {
    return this.http.get<any[]>(this.baseServiceURL + "Hotels/GetAmenities");
  }

  getHotelsList(searchFilters: any){
    return this.http.get<any[]>(this.baseServiceURL + "Hotels/GetHotels", { params: searchFilters });
  }

  loginUser(logininfo: Array<string>){
    return this.http.post(this.baseServiceURL + "Users/LoginUser",{
      UserName: logininfo[0],
      Password: logininfo[1]
    },{
      responseType: 'text',
    })
  }

  settoken(token: string){
    localStorage.setItem("access_token",token)
    this.loadCurrentUser();
  }

  loadCurrentUser(){
    const token = localStorage.getItem("access_token");
    const userinfo = token != null ? this.jwtHelperService.decodeToken(token) : null;

    const data = userinfo?{
      id: userinfo.id,
      firstname: userinfo.firstname,
      lastname: userinfo.lastname,
      mail: userinfo.mail,
      mobile: userinfo.mobile,
      gender: userinfo.gender
    }: null;
    this.currentuser.next(data);
    console.log(data)
    console.log(token)
  }

  isLoggedIn(): boolean {
    return localStorage.getItem("access_token") ? true : false;
  }
  signupUser(user:Array<string> ){
    return this.http.post(this.baseServiceURL + "Users/SignupUser",{
      FirstName: user[0],
      LastName: user[1],
      Password: user[2],
      email: user[3],
      phoneNo: user[4]
    },{responseType: 'text',});
  }
}
