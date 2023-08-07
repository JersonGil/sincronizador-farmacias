export class Clients {
  id: string;
  num_document: string;
  name: string;
  picture: string;
  direction: string;
  license: string;
  box: string;
  phone_number: string;
  service_deadline: Date;
  last_payment_date: Date;
  created_at: Date;
  updated_at: Date;
  user_id: string;
  system_info: string;
}

export type PartialClients = Partial<Clients>;
