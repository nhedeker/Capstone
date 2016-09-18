import React from 'react';
import SmallRecipe from './SmallRecipe';

const RecipeGrid = React.createClass({
  mapRecipes() {
    const { recipes } = this.props.recipes;

    return recipes.map((element, index) => {
      return <SmallRecipe key={index} recipe={element} />;
    });
  },

  render() {
    let childElements = null;

    if (this.props.recipes && this.props.recipes.recipes) {
      childElements = this.mapRecipes();
    }

    return <div className="recipeGridContainer">
      {childElements}
    </div>;
  }
});

export default RecipeGrid;
