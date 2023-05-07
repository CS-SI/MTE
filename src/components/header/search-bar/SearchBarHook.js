import { useState } from 'react'
import { addLake } from '@/stores/stateLakeSlice'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const useSearchBarHook = lakeInfo => {
  const [options, setOptions] = useState([])
  const { information } = useSelector(state => state.information)
  const dispatch = useDispatch()

  useEffect(() => {
    const optTmp = []
    Object.keys(information).forEach(el => {
      optTmp.push({
        value: information[el].name,
        label: information[el].name,
        id: information[el].id,
      })
    })
    setOptions(optTmp)
  }, [information])

  const handleSearch = () => {
    const { id } = lakeInfo
    const { coord } = information[id]
    if (id) {
      dispatch(addLake({ id, coord }))
    }
  }
  return { handleSearch, options }
}
