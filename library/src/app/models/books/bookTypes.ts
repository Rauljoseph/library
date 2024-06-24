export interface Book {
    id: number
    titulo: string
    autor: string
    isbn: string
    genero: string
    disponible: boolean
  }
  
  export type BookWithoutId = Omit<Book, 'id'>;