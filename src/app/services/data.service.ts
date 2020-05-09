import { Injectable } from '@angular/core';
import { Quote } from '../models/Quote';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  quotes: Quote[];

  constructor() { 
    this.quotes = [
      {
        id: 1,
        quote: 'Atticus said to Jem one day' ,
        authorFirstName: 'Harper',
        authorLastName: 'Lee',
        bookName: 'To Kill a Mockingbird',
        createdBy: 'Kawsar Jahan',
        createDate: new Date('01/02/2018 08:30:00')
      }
    ];
  }

  getQuotes(): Quote[] {
    console.log('Fetching quotes from service');
    return this.quotes;
  }
}
