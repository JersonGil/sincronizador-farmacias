export enum Status {
  PENDING = 2,
  HECHA = 1,
  CANCELADA = 3,
}

export class RequestsToPharmacies {
  request: string;
  clientId: string;
  status: Status;
  clientIdTo: string;
  petition_file: JSON;
}

export class PostRequest {
  request: string;
  clientId: string;
  clientIdTo: string;
}
