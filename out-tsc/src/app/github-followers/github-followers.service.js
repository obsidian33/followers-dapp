import * as tslib_1 from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
let GithubFollowersService = class GithubFollowersService {
    constructor(http) {
        this.http = http;
        this._url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    getFollowers() {
        return this.http.get(this._url);
    }
};
GithubFollowersService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], GithubFollowersService);
export { GithubFollowersService };
//# sourceMappingURL=github-followers.service.js.map