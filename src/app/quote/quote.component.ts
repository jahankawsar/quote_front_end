import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote: Quote = {
    id: 0,
    quote: '',
    authorFirstName: '',
    authorLastName: '',
    bookName: '',
    createdBy: '',
    createDate: new Date('01/02/2018 08:30:00')
  }

  quotes: Quote[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
   
      this.quotes = this.dataService.getQuotes();

  }
}
