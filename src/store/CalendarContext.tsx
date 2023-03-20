import { Category } from '@/interfaces/Category'

import * as React from 'react'
import { useState } from 'react'

const CalendarContext = React.createContext<CalendarStoreValue | undefined>(
  undefined
)

interface CalendarStoreValue {
  currentDate: Date
  setDate: React.Dispatch<React.SetStateAction<Date>>
  isYearView: boolean
  changeView: (date?: Date) => void
  dayClickCount: number
  selectedDate: undefined | Date
  toggleBarOnDateClick: (num: number, date?: any) => void
  selected: Category[]
  categories: Category[]
  setCategories: React.Dispatch<React.SetStateAction<Category[]>>
  handleChange: (category: { target: { value: any } }) => void
  handleNone: () => void
  handleAll: () => void
  weekNum: number
  incWeekNum: () => void
}

export const useCalendarContext = () => {
  const calendarContext = React.useContext(CalendarContext)
  if (calendarContext === undefined) {
    throw new Error('useCalendarContext must be called inside a CalendarStore')
  }
  return calendarContext
}

const CalendarStore = ({ children }: any) => {
  const [currentDate, setDate] = useState(new Date())
  const [yearView, setYearView] = useState(false)
  const [dayClickCount, setDayClickCount] = useState(0)
  const [selectedDate, setSelectedDate] = useState<undefined | Date>(undefined)
  const [selected, setSelected] = React.useState<Category[]>([])
  const [categories, setCategories] = React.useState<Category[]>([])
  const [weekNum, setWeekNum] = useState(1)

  const incWeekNum = () => {
    setWeekNum(weekNum + 1)
  }

  const handleChange = (category: { target: { value: any } }) => {
    const value = category.target.value
    const s: string = value
    const list = [...selected]
    const index = list
      .map(function (e: Category) {
        return e.category_name
      })
      .indexOf(s)
    const indexAdd = categories
      .map(function (e: Category) {
        return e.category_name
      })
      .indexOf(s)
    index === -1 ? list.push(categories[indexAdd]) : list.splice(index, 1)
    setSelected(list)
  }

  const handleAll = () => {
    setSelected(categories)
    return
  }

  const handleNone = () => {
    setSelected([])
    return
  }

  const changeView = (date?: Date) => {
    setYearView(!yearView)
    if (yearView && date !== undefined) {
      setDate(new Date(date.getFullYear(), date.getMonth(), 1))
    }
  }

  const toggleBarOnDateClick = (num: number, date?: any) => {
    num === 0 ? setDayClickCount(0) : setDayClickCount(dayClickCount + 1)
    setSelectedDate(date)
  }

  const calendarStoreValues: CalendarStoreValue = {
    currentDate: currentDate,
    setDate: setDate,
    isYearView: yearView,
    changeView: changeView,
    dayClickCount: dayClickCount,
    selectedDate: selectedDate,
    toggleBarOnDateClick: toggleBarOnDateClick,
    selected: selected,
    categories: categories,
    handleChange: handleChange,
    handleNone: handleNone,
    handleAll: handleAll,
    weekNum: weekNum,
    incWeekNum: incWeekNum,
    setCategories: setCategories
  }

  return (
    <CalendarContext.Provider value={calendarStoreValues}>
      {children}
    </CalendarContext.Provider>
  )
}

export default CalendarStore
