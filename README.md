# WDI-project-2
The Conscious Foodie

## Overview
The Conscious Foodie is a meal plan application. Users will have the ability to update, edit and save meals on their personal account.

## Link
[Site to The Conscious Foodie](https://ma-project-2.herokuapp.com/) [Heroku]

## Trello Board
[The Conscious Foodie Trello Link](https://trello.com/b/ALYErNHg/project-2-the-conscious-foodie)

## Technologies 
* Languages - HTML, CSS, Node.js, Express.js, MongoDB
* Design - Google Fonts, Bootstrap
* User Stories - Trello
* Atom Text Editor

## Future Developments

* Add Basal Metabolic Rate (BMR) calculator
* Include customized meal plans based of BMR averages

## Portfolio

+ [Portfolio Website](https://matkins15.github.io/Matt-Portfolio/)

## Wireframes
### Initial Sketches

![Wireframe #1](https://github.com/Matkins15/WDI-Project-2/blob/master/public/images/WireFrame%20%231.JPG)

![Wireframe #2](https://github.com/Matkins15/WDI-Project-2/blob/master/public/images/WireFrame%20%232.JPG)

## ERD 
![ERD](https://github.com/Matkins15/WDI-Project-2/blob/master/public/images/ERD%20.JPG)

User = { firstName: String, lastName: String, email: String, password_digest: String, age: Number, weigth: Number, meals: [MealsSchema], created_at: Date, updated_at: Date }

Meal = { name: String, description: String, exampleMeal: String, imgURL: String, calories: String,}
