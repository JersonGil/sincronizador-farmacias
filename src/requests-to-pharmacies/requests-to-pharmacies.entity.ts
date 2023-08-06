export enum Status {
  PENDING = 2,
  HECHA = 1,
  CANCELADA = 3,
}

export class RequestsToPharmacies {
  petition: string;
  client: string;
  status: Status;
}
