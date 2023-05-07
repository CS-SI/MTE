import { useState } from 'react'
import { useSearchBarHook } from './SearchBarHook'
import { styled } from '@/stitches.config'
import { CarbonSearch } from '../../carbon-icons'
import Select from 'react-select'
import { useEffect } from 'react'
const SDiv = styled('div', {
  'height': '100%',
  'width': '14vw',
  'display': 'flex',
  'alignItems': 'center',

  '& .react-select__control': {
    width: '100%',
    minWidth: '200px',
  },

  '& .react-select__placeholder': {
    fontFamily: 'sans-serif',
  },

  '& .react-select__indicators': {
    display: 'none',
  },

  '& .react-select__menu': {
    zIndex: '10000',
    color: 'black',
  },
})

export const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const { handleSearch, options } = useSearchBarHook(selectedOption)

  useEffect(() => {
    if (selectedOption) {
      handleSearch()
      setSelectedOption(null)
    }
  }, [selectedOption])

  return (
    <SDiv>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        placeholder="Rechercher un lac..."
        classNamePrefix="react-select"
        closeMenuOnSelect={true}
        backspaceRemovesValue={true}
        isClearable={true}
        escapeClearsValue={true}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            setSelectedOption(e.target.value)
          }
        }}
      />
    </SDiv>
  )
}
