export class Comment {
    public id: string;
    public username: string;
    public text: string;

    constructor(comment)
    {
        this.id = comment.id;
        this.username = comment.username;
        this.text = comment.text;

    }
}
