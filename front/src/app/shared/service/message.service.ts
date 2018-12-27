import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material";
import {AlertsComponent} from "../alerts/alerts.component";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    constructor(public snackBar: MatSnackBar) {
    }

    sendFlashMessage(severity: string, message: any, duration: number = 3) {
        this.snackBar.openFromComponent(AlertsComponent, {
            duration: (duration * 1000),
            verticalPosition: 'top',
            horizontalPosition: 'right',
            data: {
                message: message,
                severity: severity
            },
            panelClass: ['snack-bar-' + severity]
        });
    }
}
