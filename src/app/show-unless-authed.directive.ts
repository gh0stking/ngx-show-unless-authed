import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({ selector: '[showUnlessAuthed]' })
export class ShowUnlessAuthed {
    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainer: ViewContainerRef,
    ) { }

    @Input() set showUnlessAuthed(roleList: string[]) {
        let isAuthed = false;
        if (roleList) {
            let role = '001';
            // let role = localStorage.getItem('role');
            if (roleList.indexOf(role) != -1) {
                isAuthed = true;
            }
        }

        if (isAuthed) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

}