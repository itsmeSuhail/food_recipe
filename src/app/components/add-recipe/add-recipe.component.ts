import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { recipeProp } from '../../types/recipe';
import { MatButtonModule } from '@angular/material/button';
import { RecipeServiceService } from '../../services/recipe-service.service';
@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule],
  templateUrl: './add-recipe.component.html',
  styleUrl: './add-recipe.component.scss'
})
export class AddRecipeComponent {
  constructor(private recipeService: RecipeServiceService) { }
  recipe: recipeProp = {
    category: '',
    description: '',
    userId: "65fe5abb3ab4052613efcb65",
    images: [],
    title: ''
  }
  
  image = ''
  Onsubmit() {
    this.recipe.images = [...this.recipe.images, ...this.image.split(",")];
    this.recipeService.createRecipes(this.recipe).subscribe({
      next: (res) => {
        console.log(res, "hello");
      }
    })
  }
}
