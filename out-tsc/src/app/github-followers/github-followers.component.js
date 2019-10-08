import * as tslib_1 from "tslib";
import { ActivatedRoute } from '@angular/router';
import { GithubFollowersService } from './github-followers.service';
import { Component } from '@angular/core';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
let GithubFollowersComponent = class GithubFollowersComponent {
    constructor(route, service) {
        this.route = route;
        this.service = service;
    }
    ngOnInit() {
        combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ]).pipe(switchMap(combined => {
            let id = combined[0].get('id');
            let page = combined[1].get('page');
            return this.service.getFollowers();
        }))
            .subscribe(followers => this.followers = followers);
    }
};
GithubFollowersComponent = tslib_1.__decorate([
    Component({
        selector: 'github-followers',
        templateUrl: './github-followers.component.html',
        styleUrls: ['./github-followers.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [ActivatedRoute,
        GithubFollowersService])
], GithubFollowersComponent);
export { GithubFollowersComponent };
//# sourceMappingURL=github-followers.component.js.map