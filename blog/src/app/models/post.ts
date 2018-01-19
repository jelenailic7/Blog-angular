export class Post {
    public id: number;
    public title: string;
    public text: string;
    public created_at :string;
    
    constructor( id:number, title:string, text:string, created_at:string )
    {
        this.id = id;
        this.title = title;
        this.text = text;
        this.created_at = created_at;
    }
}
