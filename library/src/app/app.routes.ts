import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    title: 'Library | usuarios',
    loadComponent: () => import('./pages/user-page/user-page.component'),
    children: [
      {
        path: 'create',
        loadComponent: () =>
          import(
            './components/user/user-create/user-create/user-create.component'
          ),
      },
      {
        path: 'delete',
        loadComponent: () =>
          import('./components/user/user-delete/user-delete.component'),
      },
      {
        path: 'update',
        loadComponent: () =>
          import('./components/user/user-update/user-update.component'),
      },
    ],
  },
  {
    path: 'libros',
    title: 'libros',
    loadComponent: () => import('./pages/book-page/book-page.component'),
    children: [
      {
        path: ':id',
        loadComponent: () =>
          import('./components/book/book-list/book.component'),
      },
     
    ],
  },
  {
    path: 'create',
    loadComponent: () =>
      import('./components/book/book-create/book-create.component'),
  },
  {
    path: 'update',
    title:'update',
    loadComponent: () =>
      import('./components/book/book-update/book-update.component'),
  },
  { path: '**', redirectTo: '/libros', pathMatch: 'full' },
];
