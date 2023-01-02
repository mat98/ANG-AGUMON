import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'detail-project-init',
    templateUrl: './detail-project-init.component.html',
    styleUrls: ['./detail-project-init.component.scss'],
})

export class DetailProjectInitComponent implements OnInit {
    isLoading: boolean = true;

    ngOnInit(): void {
        window.scrollTo(0, 0);
    }

    loadingChangeImg() {
        this.isLoading = false;
    }
}