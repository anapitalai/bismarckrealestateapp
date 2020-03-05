import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/shared/services/feedback.service';
import  {Feedback} from 'src/app/shared/models/feedback';
@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {

  constructor(private service: FeedbackService) { }
  
  feedbacks:Feedback[];
  
  ngOnInit(): void {
     this.service.getFeedbacks()
     .subscribe(feedbacks=>this.feedbacks=feedbacks);

}

}

/**
export class TeachersListComponent implements OnInit {
  teachers:Teacher[];
  ngOnInit(): void {
    this.service.getContacts()
    .subscribe(teachers=>this.teachers=teachers);
  }
    
  constructor(private service: TeacherService,private auth:AuthService) {}

}

 */
