import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() confirm: string = 'Confirm';
  @Input() buttonClass: string = 'btn-primary';

  @Output() onClose = new EventEmitter();
  @Output() onConfirm = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeModal(): void {
    this.onClose.emit();
  }

  confirmModal(): void {
    this.onConfirm.emit();
  }
}
