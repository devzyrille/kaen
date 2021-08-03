import React, { useState } from 'react'
import RecipeList from './RecipeList'
import RecipeSearch from './RecipeSearch'
import { useFilterRecipes } from './useFilterRecipes'

const FilterableRecipes = () => {
  // const [query, setQuery] = useState('banana')
  const [{ recipes, isLoading, isError, requestUri }, handleRequest] =
    useFilterRecipes()

  // const handleQuery = (e) => {
  //   setQuery(e.target.value)
  // }

  const hay = (searchInput) => {
    handleRequest(searchInput)
  }
  //di na siya mag rerender since wala na yung state ng
  return (
    <>
      <RecipeSearch
        // handleQuery={handleQuery}
        handleSearch={hay}
      />
      <code className='bg-black text-green-200 m-auto'>{requestUri}</code>

      {isError && <div>ERR</div>}

      {isLoading ? 'teka' : <RecipeList recipes={recipes} />}
    </>
  )
}

export default FilterableRecipes
