import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Member } from '../member';
import { SendmailService } from '../sendmail.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  public ourmember: Member;
  private littleclient: HttpClient;

  // here i initialise the variable as the member class

  public lastName: string = null;
  public firstName: string = null;
  public phoneNumber: string = null;
  public email: string = null;
  public comment: string = null;

  constructor(private emailService: SendmailService) {
    this.ourmember = new Member();
  }
  submit() {
    this.ourmember.lastName = this.lastName;
    this.ourmember.firstName = this.firstName;
    this.ourmember.phoneNumber = this.phoneNumber;
    this.ourmember.email = this.email;
    this.ourmember.comment = this.comment;

    this.emailService.sendmail(this.ourmember).subscribe(
      () => {
        alert("mail envoyé");
      }
     
    );
    console.log(this.ourmember)
  }

  ngOnInit() {
  }

}
