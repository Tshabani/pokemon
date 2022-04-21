import { GetPokemonParams } from './../models/GetPokemonParams';
import { environment } from './../../environments/environment';
import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SimplePokemon } from '../models/SimplePokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  public onSearch: EventEmitter<string> = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getPokemon(offset: number, limit: number): Observable<SimplePokemon> {
    const queryParams: HttpParams = new HttpParams()
      .set('offset', offset)
      .set('limit', limit);

    return this.http.get<SimplePokemon>(`${environment.baseUrl}pokemon`, {
      params: queryParams,
    });
  }

  getPokemonImgUrl(url: string): string {
    let pokemonId: string = url
      .replace(`${environment.baseUrl}pokemon`, '')
      .slice(0, -1);
    return `${environment.imgBaseUrl}${pokemonId}.png`;
  }

  doSomething(term: string) {
    this.onSearch.emit(term);
  }
}
