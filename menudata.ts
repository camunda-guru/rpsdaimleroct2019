import {Item, Menu} from "./menu";


export  let menuData:Menu[]=[
  new Menu('Inbox', 'pi pi-fw pi-sign-out','Inbox',[ ]),
  new Menu('Policy', 'pi pi-fw pi-plus','',[new Item('Add',

    'pi pi-fw pi-share-alt','Policy/Add'),
    new Item('Edit','pi pi-fw pi-pencil','Policy/Edit'),
    new Item('View','pi pi-fw pi-cog','Policy/View'),
    new Item('Delete','pi pi-fw pi-key','Policy/Delete')
  ]),

  new Menu('PolicyHolder', 'pi pi-fw pi-sign-out','PolicyHolder',[ ]),

  new Menu('Vehicle', 'pi pi-fw pi-sign-out','Vehicle',[ ]),
  new Menu('Report', 'pi pi-fw pi-sign-out','Report',[ ]),
  new Menu('Dashboard', 'pi pi-fw pi-sign-out','Dashboard',[ ])

]
