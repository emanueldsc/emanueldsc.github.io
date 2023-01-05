export enum LinkMenuType {
    LINK = 'LINK', BUTTON = 'BUTTON'
}

export class LinkMenu {
    constructor(
        public routerLink: string,
        public label: string,
        public type: LinkMenuType = LinkMenuType.LINK,
        public clickEvent?: () => void
    ) { }
}