export interface Books {
  books: Book[];
}

export interface Book {
  name: string;
  cover: string;
  description: string;
  author: string;
  publisher: string;
  codeIsbn: number;
  year: number;
  pages: number;
  rating: number;
  comment: string;
  personalNotes: string;
}
