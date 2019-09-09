import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule} from '@angular/forms';

import { AddTaskComponent } from './add-task.component';
import { Ng5SliderModule } from 'ng5-slider';
import { Routes, RouterModule } from '@angular/router';
import { TaskService } from '../services/task.service';
import { EventService } from '../services/event.service';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule, BsDatepickerModule } from 'ngx-bootstrap';
import { FilteruserPipe } from '../pipes/filteruser.pipe';
import { ProjectService } from '../services/project.service';
import { UserService } from '../services/user.service';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
 // let de: DebugElement;

  beforeEach(async(() => {
    const routes: Routes = [
      { path: '', component: AddTaskComponent }
    ];
    TestBed.configureTestingModule({
      declarations: [ AddTaskComponent ,FilteruserPipe],
      providers: [TaskService, EventService,ProjectService,UserService],
      imports: [FormsModule, ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right',
        preventDuplicates: true
      }),
        HttpClientModule,
        ModalModule.forRoot(),
        RouterModule.forRoot(routes),
        Ng5SliderModule,
        BsDatepickerModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
   // de = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onChange', () => {
    it('should be called with whatever the counter change event emits', () => {
      
      spyOn(component, 'addTask');
      component.addTask();
      //const counter = fixture.debugElement.query(By.directive(AddTaskComponent));
      const button = fixture.debugElement.query(By.css('.addTask'));
      button.nativeElement.click();
      expect(component.addTask).toHaveBeenCalled(); 
    });
  });
});
