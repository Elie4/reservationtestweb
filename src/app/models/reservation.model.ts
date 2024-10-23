export interface Reservation {
  id?: number;
  restaurantId: number;
  branchId: number;
  tableId: number;
  date: Date;
  time: string;
  guestName: string;
  guestEmail: string;
}
