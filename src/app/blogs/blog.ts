export class Blog {
  constructor(public _id?: string,
    public name?: string, public email?: string,
    public description?: string,
    public title?: string,
    public contact?: {
      mobile?: string,
      telephone?: string
    }) {}
  // _id?: string;
  // name?: string;
  // email?: string;
  // description?: string;
  // title?: string;
  // contact?: {
  //   mobile?: string;
  //   telephone?: string;
  // }
}
