import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent implements OnInit{
    allowNewServer = false;
    serverId:number=10;
    serverStatus='offline';
    getServerStatus(){
        return this.serverStatus
    }

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000);
    }
    ngOnInit(): void {
    }
}