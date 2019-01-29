export class Song {
	Name: string;
	Url: string;
	desc: string;
	cat: string

	constructor(x:string, y:string, z:string, ab:string){
		this.Name = x;
		this.Url = y;
		this.desc = z;
		this.cat = ab;
	}
}