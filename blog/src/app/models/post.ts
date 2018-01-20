export class Post {
    public id: number;
    public title: string;
    public text: string;
    public created_at :string;
    public comments: Comment[];
    
    constructor(post)
    {
        this.id = post.id;
        this.title = post.title;
        this.text = post.text;
        this.created_at = post.created_at;
        this.comments = post.comments;
    }

    // constructor(
    // public id: number,
    // public title: string,
    // public text: string,
    // public created_at :string
    // ){}
}
