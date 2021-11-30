export class Order{

  id:Number;
  client:string;
  address:string;
  date:string;

  constructor(id: Number, client: string, address: string, date: string) {
    this.id = id;
    this.client = client;
    this.address = address;
    this.date = date;
  }

}
