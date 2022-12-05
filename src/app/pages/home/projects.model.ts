export interface ProjectsFilterComponent {
    nameProject: string, routeDetail: string, img: string, description: string, digivice: string
}


export class ProjectsHome implements ProjectsFilterComponent {
    public nameProject: string;
    public routeDetail: string;
    public img: string;
    public description: string;
    public digivice: string;

    constructor(nameProject: string, routeDetail: string, img: string, description: string, digivice: string) {
        this.nameProject = nameProject;
        this.routeDetail = routeDetail;
        this.img = img;
        this.description = description;
        this.digivice = digivice;
    }
}
