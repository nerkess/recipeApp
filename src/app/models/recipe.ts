export class Recipe{
    constructor(
        public id: string, 
        public imgUrl: string,
        public title: string,  
        public time: string, 
        public description: string){
    }
}

export interface RecipeData {
    imgUrl: string;
    time: string;
    title: string;
    description: string; 
}
