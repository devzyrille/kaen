import { useState, useEffect } from 'react'

const EDAMAM_API_ID = 'aea179e3'
const EDAMAM_API_KEY = '7bb4fd8f551ec02eec56e6fae6acd73b'
const EDAMAM_API_AP = `https://api.edamam.com/api/recipes/v2?type=public&app_id=${EDAMAM_API_ID}&app_key=${EDAMAM_API_KEY}`

export const useFilterRecipes = () => {
  const [query, setQuery] = useState('banana'); //tatanggalin to pinagana kolangyunge error
  const [recipes, setRecipes] = useState([]);
  const [requestUri, setRequestUri] = useState(`${EDAMAM_API_AP}&q=${query}`) //eto dapat walang query
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  //ayusin mo na lang tong useFilterRecipe na dapat ang gagamitin niya is yung parameter ng handleRequest
  const handleRequest = (query) => {
    setRequestUri(`${EDAMAM_API_AP}&q=${query}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      try {
        const response = await fetch(requestUri)
        const { hits } = await response.json()
        setRecipes(hits)
      } catch (error) {
        setIsError(true)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [requestUri])

  return [{ recipes, isLoading, isError, requestUri }, handleRequest]
}
