import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface WeatherForecast {
    date: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false,
    styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
    public forecasts: WeatherForecast[] = [];
    public selectedWeather: number = 0;


    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getForecasts();
    }

    getForecasts() {
        this.http.get<WeatherForecast[]>('/weatherforecast').subscribe(
            (result) => {
                this.forecasts = result;
            },
            (error) => {
                console.error(error);
            }
        );
    }
    selectOption(event: Event): void {
        const target = event.currentTarget as HTMLElement;
        const inputElement = target.querySelector('input[type="radio"]') as HTMLInputElement | null;

        if (!inputElement) return;
        inputElement.checked = true;

        // Remove the selected style from all options
        document.querySelectorAll<HTMLDivElement>(".payment-option").forEach(option => {
            option.classList.remove("selected");
        });

        // Add selected style to the clicked option
        target.classList.add("selected");
    }

    title = 'testapp.client';
}
