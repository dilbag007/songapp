export class User {
	FName:string;
	LName:string;
	Eml:string;
	ConNo:string;
	Pswd:string;

	constructor(a:string, b:string, c:string, d:string, e:string){
		this.FName = a;
		this.LName = b;
		this.Eml = c;
		this.ConNo = d;
		this.Pswd = e;
	}
}