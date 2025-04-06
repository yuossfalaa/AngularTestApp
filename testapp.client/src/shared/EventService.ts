import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private eventSubject: Subject<any> = new Subject<any>();

    emit(eventName: string, payload: any) {
        this.eventSubject.next({ eventName, payload });
    }
    listen(eventName: string, callback: (event: any) => void) {
        this.eventSubject.asObservable().subscribe((nextObj: any) => {
            if (nextObj.eventName === eventName) {
                callback(nextObj.payload);
            }
        });
    }
}
