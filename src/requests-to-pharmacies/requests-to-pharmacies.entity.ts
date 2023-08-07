export enum Status {
  PENDING = 2,
  HECHA = 1,
  CANCELADA = 3,
}

export class RequestsToPharmacies {
<<<<<<< HEAD
  request: string;
=======
  petition: string;
>>>>>>> 980c2da3cc060d5d78435713dc81ea74fb5f5707
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

export class PostRequest {
  petition: string;
  clientId: string;
}
