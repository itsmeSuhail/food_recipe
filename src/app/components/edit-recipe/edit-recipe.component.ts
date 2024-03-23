import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { recipeProp } from '../../types/recipe';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RecipeServiceService } from '../../services/recipe-service.service';

@Component({
  selector: 'app-edit-recipe',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './edit-recipe.component.html',
  styleUrl: './edit-recipe.component.scss'
})
export class EditRecipeComponent {
  constructor(@Inject(MAT_DIALOG_DATA) private data:recipeProp,private recipeService:RecipeServiceService){}
  recipe: recipeProp = {
    ...this.data
  }
  image = ''
  Onsubmit() {
    this.recipe.images = [...this.image.split(",")];
    console.log(this.recipe, "see");
    this.recipeService.updateRecipes(this.recipe,this.recipe._id!).subscribe({
      next:(res)=>{
        console.log(res,"Hello")
      }
    })
  }
  ngOnInit(){
    this.image=this.recipe.images.join(",");
    console.log(this.recipe,"Edited");
  }
}
