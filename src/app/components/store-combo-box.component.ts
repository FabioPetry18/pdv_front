import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-combo-box',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="relative">
      <button class="flex items-center p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-100 w-full" (click)="toggleDropdown()">
        <span class="text-gray-700">{{ selectedStore ? selectedStore.name : 'Selecione uma loja' }}</span>
      </button>

      <div *ngIf="isDropdownOpen" class="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg">
        <div *ngFor="let store of stores" (click)="selectStore(store)" class="flex items-center p-2 cursor-pointer hover:bg-gray-100">
          <span class="text-gray-700">{{ store.name }}</span>
        </div>
      </div>
    </div>
  `
})
export class StoreComboBoxComponent implements OnInit {
  @Input() stores: { name: string }[] = [];
  @Output() selectedStoreChange = new EventEmitter<{ name: string }>();

  selectedStore: { name: string} | null = null;
  isDropdownOpen = false;

  ngOnInit() {
    if (this.stores && this.stores.length > 0) {
      this.selectStore(this.stores[0]);
    }
  }
  selectStore(store: { name: string }) {
    this.selectedStore = store;
    this.selectedStoreChange.emit(store);
    this.isDropdownOpen = false;
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
