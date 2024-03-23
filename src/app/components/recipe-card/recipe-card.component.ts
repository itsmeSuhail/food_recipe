import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { recipeProp } from '../../types/recipe';
import { MatIconModule } from '@angular/material/icon';
import { AddserviceService } from '../../services/addservice.service';
import { EditRecipeComponent } from '../edit-recipe/edit-recipe.component';
import { RecipeServiceService } from '../../services/recipe-service.service';
@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.scss'
})
export class RecipeCardComponent {
  constructor(private modelService: AddserviceService,private recipeService:RecipeServiceService) { }
  @Input() recipe!: recipeProp;
  editModalHandler() {
    this.modelService.modalHandler(EditRecipeComponent,this.recipe);
  }
  deleteRecipe(){
  console.log(this.recipe._id,"Deleted")
     this.recipeService.deleteRecipes(this.recipe._id!).subscribe({
    next:(res)=>{
      console.log("Deleted")
    }
   })
  }
  // ngOnInit() {
  // }


}
