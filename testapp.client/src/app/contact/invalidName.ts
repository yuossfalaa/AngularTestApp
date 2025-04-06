import { AbstractControl, ValidationErrors } from "@angular/forms";

export function invalidName(control: AbstractControl): ValidationErrors | null {
    const value = control?.value;
    if (!value) {
        return null; // No value, no validation needed
    }
    const invalidNames = ['admin', 'root', 'user'];
    const isInvalid = invalidNames.some(name => value.toLowerCase().includes(name));
    return isInvalid ? { invalidName: true } : null;
}