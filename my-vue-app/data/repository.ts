import { Pokemon } from './pokemon';

export interface Repository<T extends { id: number }> {
  get(_id: T['id']): Promise<T>;
  getAll(_url: string): Promise<T[]>;
  // Create(_item: Omit<T, 'id'>): Promise<T>;
  // update(_name: T['id'], _item: Partial<T>): Promise<T>;
  // delete(_name: T['id']): Promise<T>;
}

export class ApiRepository implements Repository<Pokemon> {
  urlBase: string;
  constructor(urlBase: string) {
    this.urlBase = urlBase;
  }

  async get(id: number): Promise<Pokemon> {
    const url = this.urlBase + '/' + id;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async getAll(url: string): Promise<Pokemon[]> {
    const response = await fetch(url);
    const data: any[] = await response.json();
    return data;
  }
}
