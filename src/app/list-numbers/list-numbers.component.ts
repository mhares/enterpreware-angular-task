import { Component, OnInit } from '@angular/core';
import { PhoneNumber } from '../common/phone-number';
import { PhoneNumberService } from '../services/phone-number.service';

@Component({
  selector: 'app-list-numbers',
  templateUrl: './list-numbers.component.html',
  styleUrls: ['./list-numbers.component.css']
})
export class ListNumbersComponent implements OnInit {
  
  phoneNumbers: PhoneNumber[] = [];

  constructor(private phoneNumberService: PhoneNumberService) { }

  ngOnInit(): void {
    this.listNumbers();
  }

  listNumbers() {
    this.phoneNumberService.getPhoneNumbers().subscribe(
      data => {
        this.phoneNumbers = data;
         
      }
    );
  }

  checkNumber(value :string) {
    this.phoneNumberService.checkNumber(value);
    
  }
}
