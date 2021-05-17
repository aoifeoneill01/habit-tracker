import { useState, useEffect } from 'react'
import Header from './components/header'
import Week from './components/date'
import AddHabit from './components/addHabit'
import AddNewHabit from './components/newHabit'

function App() {

const [showForm, setShowForm] = useState(false)
const [habit, setHabits] = useState([])


useEffect(() => {
  const getHabits = async () => {
    const habitsFromServer = await fetchHabits()
    setHabits(habitsFromServer)
  }

  getHabits()
}, [])

// Fetch Habits
const fetchHabits = async () => {
  const res = await fetch('http://localhost:5000/habits')
  const data = await res.json()

  return data
}

// Add Habit
const addHabit = async (habitText) => {
  const res = await fetch('http://localhost:5000/habits', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(habitText)
  })

  const data = await res.json()
  setHabits([...habit, data])
}

// Delete Habit
const deleteHabit = async (id) => {
    await fetch(`http://localhost:5000/habits/${id}`,{
    method: 'DELETE'
  })

  setHabits(habit.filter((habitText) => 
    habitText.id !== id
    ))
}
 
// Fetch Habit (SINGLE)
const fetchHabit =  async (id) => {
  const res = await fetch(`http://localhost:5000/habits/${id}`)
  const data = await res.json()

  return data
}

// Toggle Check Habit Monday
  const checkMon = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckMon =  { ...HabitToCheck, mon: !HabitToCheck.mon }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckMon)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, mon: data.mon} : habit
    )
   )
  }

// Toggle Check Habit Tuesday
  const checkTue = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckTue =  { ...HabitToCheck, tue: !HabitToCheck.tue }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckTue)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, tue: data.tue} : habit
    )
   )
  }

  // Toggle Check Habit Wednesday
  const checkWed = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckWed =  { ...HabitToCheck, wed: !HabitToCheck.wed }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckWed)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, wed: data.wed} : habit
    )
   )
  }

  // Toggle Check Habit Thursday
  const checkThur = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckThur =  { ...HabitToCheck, thur: !HabitToCheck.thur }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckThur)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, thur: data.thur} : habit
    )
   )
  }

  // Toggle Check Habit Friday
  const checkFri = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckFri =  { ...HabitToCheck, fri: !HabitToCheck.fri }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckFri)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, fri: data.fri} : habit
    )
   )
  }  

  // Toggle Check Habit Saturday
  const checkSat = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckSat =  { ...HabitToCheck, sat: !HabitToCheck.sat }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckSat)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, sat: data.sat} : habit
    )
   )
  }

  // Toggle Check Habit Sunday
  const checkSun = async (id) => {
    const HabitToCheck = await fetchHabit(id)
    const updateCheckSun =  { ...HabitToCheck, sun: !HabitToCheck.sun }

    const res = await fetch(`http://localhost:5000/habits/${id}`, {
      method: 'PUT',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(updateCheckSun)
  })
  
  const data = await res.json()
  
    setHabits(habit.map((habit) =>
      habit.id === id ? { ...habit, sun: data.sun} : habit
    )
   )
  }  

  return (
    <div>
     <div>
       <Header showForm={showForm} add={() => setShowForm(!showForm) } />
       {showForm && <AddHabit AddNewHabit={AddNewHabit} addHabit={addHabit} setShowForm={setShowForm} />}
     </div>
     <div className="habit-table"> 
       <Week />
       <AddNewHabit habit={habit} checkMon={checkMon} checkTue={checkTue} checkWed={checkWed}
          checkThur={checkThur} checkFri={checkFri} checkSat={checkSat} checkSun={checkSun} onDelete={deleteHabit} />
     </div>
    </div>
  )
}

export default App;
