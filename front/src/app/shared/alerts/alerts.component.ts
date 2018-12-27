import {Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from "@angular/material";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {
    severity = {
        'message': '',
        'icon': ''
    };

    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

    ngOnInit() {
        this.severity =  {
            'message': '',
            'icon': ''
        };

        switch (this.data.severity) {
            case 'info':
                this.severity['message'] = 'Info Message : ';
                this.severity['icon'] = 'info_outline';
                break;
            case 'success':
                this.severity['message'] = 'Success Message : ';
                this.severity['icon'] = 'check_circle';
                break;
            case 'warning':
                this.severity['message'] = 'Warning Message : ';
                this.severity['icon'] = 'warning';
                break;
            case 'error':
                this.severity['message'] = 'Error Message : ';
                this.severity['icon'] = 'warning';
                break;
        }
    }
}
