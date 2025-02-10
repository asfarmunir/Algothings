export interface Blog {
    id: number;
    title: string;
    body: string;
    userId: number;
}
export interface BlogPost {
    id: number;
    title: string;
    body: string;
    userId: number;
    date?: string;
  }