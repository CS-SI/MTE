import { useState, useCallback } from 'react'
import { useSelector } from 'react-redux'

export default function useMapHook({ isOpen, handleSetNoData }) {
  const [open, setOpen] = useState(isOpen)
  const handleClose = useCallback(() => {
    setOpen(!open)
    handleSetNoData()
  }, [setOpen])

  const form = useSelector(state => state.form)
  const { dataType } = form
  return {
    open,
    handleClose,
    dataType,
  }
}
