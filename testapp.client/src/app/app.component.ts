import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css',
    encapsulation: ViewEncapsulation.None, // This allows Bootstrap styles to apply

})

export class AppComponent {
    constructor(private router: Router) {
    }
    goToContact() {
        this.router.navigate(['contact']);
    }
}