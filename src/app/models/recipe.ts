export class Recipe {
    imgUrl: string;
    time: string;
    title: string;
    description: string;

    constructor(imgUrl: string, time: string, title: string, description: string){
        this.imgUrl = imgUrl;
        this.time = time;
        this.title = title;
        this.description = description;
    }
}
