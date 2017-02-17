import {Component} from "@angular/core"


@Component({
    moduleId:module.id,
selector:'jumbotron',
templateUrl : 'jumbotron.component.html' 
})

export class JumbotronComponent{
    private jbtHeading:String;
    private jbtText:String;
    private jbtBtnTxt:String;
private jbtBtnUrl:String;

    constructor(){
            this.jbtHeading="Hello Deepak"
            this.jbtText=`This is a simple hero unit.A simple jumbotron style componnent for calling extra 
            attention to featured content or information.`
            this.jbtBtnTxt="ReadMore"
            this.jbtBtnUrl="/about"
    }
}




