import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { baseUrl } from '../types/auth';
import { recipeProp } from '../types/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeServiceService {
  constructor(private http: HttpClient) { }
  recipeSubject = new BehaviorSubject<any>({
    recipes: [],
    loading: false,
    newRecipe: null
  });
  getRecipes(): Observable<any> {
    return this.http.get(`${baseUrl}/recipe`).pipe(
      tap((recipes) => {
        console.log("see all arr",recipes)
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes });
      })
    )

  }
  createRecipes(recipeObj: recipeProp): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer token`,
      'Content-Type': "application/json",
    })
    return this.http.post(`${baseUrl}/recipe`, recipeObj, { headers, withCredentials: true }).pipe(
      tap((newRecipe) => {
        const currentState = this.recipeSubject.value;
        this.recipeSubject.next({ ...currentState, recipes: [...currentState.recipes, newRecipe] });
      })
    )

  }
  updateRecipes(recipeObj: recipeProp, id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer token`,
      'Content-Type': "application/json",
    })
    return this.http.put(`${baseUrl}/recipe/${id}`, recipeObj, { headers, withCredentials: true }).pipe(
      tap((newRecipe) => {
        const currentState = this.recipeSubject.value;
        const arr = currentState.recipes.map((item:recipeProp)=>{
          if(item._id===id){
            return recipeObj;
          }
          return item;
        });
        this.recipeSubject.next({ ...currentState, recipes: arr });
      })
    )

  }
  deleteRecipes(id: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer token`,
      'Content-Type': "application/json",
    })
    return this.http.delete(`${baseUrl}/recipe/${id}`, { headers, withCredentials: true }).pipe(
      tap((res) => {
        const currentState = this.recipeSubject.value;
        const arr = currentState.recipes.filter((item: recipeProp) => item._id !=id);
        this.recipeSubject.next({ ...currentState, recipes: arr });
      })
    )

  }
}
