export interface Result {
  name: string;
  url: string;
}

export interface SimplePokemon {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}
