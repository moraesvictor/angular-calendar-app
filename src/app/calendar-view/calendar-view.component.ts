import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent implements OnInit {
  calendarDates: Date[] = [];
  appointments: any[] = [];

  ngOnInit() {
    this.generateCalendarDates();
  }

  generateCalendarDates() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date(today.getFullYear(), today.getMonth(), today.getDate() + i);
      this.calendarDates.push(date);
    }
  }

  deleteAppointment(appointment: any) {
    const index = this.appointments.indexOf(appointment);
    if (index > -1) {
      this.appointments.splice(index, 1);
    }
  }

  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.appointments, event.previousIndex, event.currentIndex);
  }
}
