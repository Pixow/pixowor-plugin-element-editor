import { Inject, Injectable } from '@angular/core';
import { PixoworCore } from 'pixowor-core';
import { BehaviorSubject } from 'rxjs';
import { Avatar, QueryParams } from 'pixow-api';
const urlResolve = require('url-resolve-browser');

export type HumanoidCard = Avatar & {
  cover: string;
};

@Injectable({
  providedIn: 'root',
})
export class AppService {
  total$ = new BehaviorSubject<number>(0);
  humanoidCards$ = new BehaviorSubject<HumanoidCard[]>([]);

  constructor(private pixoworCore: PixoworCore) {}

  user$ = new BehaviorSubject(null);

  getUser() {
    return this.user$.asObservable();
  }
}
