import React, { useState, useEffect } from 'react'
import RecipeSummary from './RecipeSummary'

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map((single_recipe) => {
        return (
          <RecipeSummary
            key={single_recipe.recipe.uri}
            {...single_recipe.recipe}
          />
        )
      })}
    </>
  )
}

export default RecipeList
