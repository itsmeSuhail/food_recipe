import { Component } from '@angular/core';
import { RecipeCardComponent } from '../../components/recipe-card/recipe-card.component';
import { recipeProp } from '../../types/recipe';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddserviceService } from '../../services/addservice.service';
import { AddRecipeComponent } from '../../components/add-recipe/add-recipe.component';
import { RecipeServiceService } from '../../services/recipe-service.service';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [RecipeCardComponent, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  constructor(private addservice: AddserviceService, private getRecipe: RecipeServiceService) { }
  localModalHandler() {
    this.addservice.modalHandler(AddRecipeComponent);
  }
  recipeArr: recipeProp[] = [

  ]
  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.getRecipe.getRecipes().subscribe();
    this.getRecipe.recipeSubject.subscribe((recipe)=>{
      this.recipeArr=recipe.recipes;
    })
  }
}
