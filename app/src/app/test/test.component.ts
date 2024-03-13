import {Component} from "@angular/core";
import {env} from "../../env";

@Component({
  selector: "app-card",
templateUrl: env.tailwind ? "test.component.html" : "bootstrap.component.html",
styleUrls: ["test.component.sass"]
})
export class TestComponent {
  cardTitle: string = 'title';
  cardDescription: string = 'desc';
  url: string = 'https://link.com/';
  imageUrl: string = '';
}
