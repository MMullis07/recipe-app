import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Schnitzel",
      imageUrl:
        "https://i2.wp.com/somuchfoodblog.com/wp-content/uploads/2019/02/c43ac-porkschnitzel1-e1587916004737.jpg?fit=2503%2C2540&ssl=1",
      ingredients: ["French Fries", "Pork Meat", "Pasta", "Sauce"],
    },
    {
      id: "r2",
      title: "Spicy Fried Chicken",
      imageUrl:
        "https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/92a943cd-76bd-4440-ae77-85ef2a66bce4/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4",
      ingredients: ["Chicken", "French Fries", "Hawaiian Rolls", "Spicy Sauce"],
    },
  ];

  constructor() {}

  ngOnInit() {}
}
