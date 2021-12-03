export class Order{

  id:number;
  client:string;
  address:string;
  date:string;

  constructor(id: number, client: string, address: string, date: string) {
    this.id = id;
    this.client = client;
    this.address = address;
    this.date = date;
  }

}
