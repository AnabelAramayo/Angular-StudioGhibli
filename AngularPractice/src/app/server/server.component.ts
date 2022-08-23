import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
    allowNewServer = false;
    //serverId:number=10;
    //serverStatus='offline';
    //getServerStatus(){
    //    return this.serverStatus
    //}

    serverCreationStatus = 'No server was created';

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    ngOnInit(): void {
    }
    onCreateServer (){
        this.serverCreationStatus='Server was created'
    }
}