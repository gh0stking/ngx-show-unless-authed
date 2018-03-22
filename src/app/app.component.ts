import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <input type="button" value="查看" *showUnlessAuthed="['001','002','003']">
    <input type="button" value="删除" *showUnlessAuthed="['002','003']">
  `
})
export class AppComponent { }
