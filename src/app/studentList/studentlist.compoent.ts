import { Router } from '@angular/router';
import { StudentService } from "src/app/service/service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./studentlist.html",
})
export class StudentListComponent implements OnInit {
  public studlist: any;
  constructor(public studservice: StudentService, public route: Router) {}

  ngOnInit() {
    this.studentlist();
  }
  studentlist() {
    this.studservice.getStudentList().subscribe(res => {
      this.studlist = res;
    });
  }
  register() {
    this.route.navigate(["register"]);
  }
  delete(id) {
    this.studservice.delete(id).subscribe(res => {
      if (res === 1) {
        alert('delete');
      }
    });
  }
}
