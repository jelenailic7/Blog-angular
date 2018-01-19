export class Post {
    public id: number;
    public title: string;
    public text: string;
    public created_at :string;
    
    constructor(post)
    {
        this.id = post.id;
        this.title = post.title;
        this.text = post.text;
        this.created_at = post.created_at;
    }

    // constructor(
    // public id: number,
    // public title: string,
    // public text: string,
    // public created_at :string
    // ){}
}
