class PostIt {
    backGroundColor: string;
    text: string;
    textColor: string;
    constructor(backGroundColor: string, text: string, textColor:string){
        this.backGroundColor = backGroundColor;
        this.text = text;
        this.textColor = textColor;
    }
}

let postIt1: PostIt = new PostIt('orange', 'Idea-1', 'blue');
let postIt2: PostIt = new PostIt('pink', 'Awesome', 'black');
let postIt3: PostIt = new PostIt('yellow', 'Superb', 'green');

console.log(postIt1);
console.log(postIt2);
console.log(postIt3);