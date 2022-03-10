import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'ngx-form-page',
  templateUrl: './form-page.component.html'
})
export class FormPageComponent implements OnInit, OnDestroy {
  form: FormGroup;

  private unsubscribe = new Subject<void>();

  get isValidEmail(): boolean {
    return (
      !this.form?.get('email')?.valid && !!this.form?.get('email')?.touched
    );
  }

  get addresses(): AbstractControl[] {
    return (this.form?.controls['addresses'] as FormArray)?.controls;
  }

  get isInvalidForm(): boolean {
    return this.form?.invalid;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.onSubscribeName();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  onShowState(): void {
    console.log('Form group', this.form);
  }

  onAddAddress(): void {
    const addresses = this.form?.get('addresses') as FormArray;

    addresses.push(this.createAddressGroup());
  }

  onRemoveAddress(index: number): void {
    const addresses = this.form?.get('addresses') as FormArray;

    addresses.removeAt(index);
  }

  private initForm(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, customValidations]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.createAddressGroup()])
    });
  }

  private onSubscribeName(): void {
    const control = this.form?.get('name');

    control?.valueChanges
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((data: string) => console.log('Name changed: ', data));
  }

  private createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      number: ['', Validators.required]
    });
  }
}

function customValidations(
  control: FormControl
): { [s: string]: boolean } | null {
  return control?.value === 'netex' ? { validateNameNetex: true } : null;
}
