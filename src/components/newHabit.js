import Habit from './habit'

const AddNewHabit = ({ checkMon, checkTue, checkWed, checkThur, checkFri, checkSat, checkSun, onDelete, habit }) => {


      return(
        <>
        {habit.map((habitText) => (
           <Habit habitText={habitText} key={habitText.id} onDelete={() => onDelete(habitText.id)} checkMon={checkMon} checkTue={checkTue}
           checkWed={checkWed} checkThur={checkThur} checkFri={checkFri} checkSat={checkSat} checkSun={checkSun} />
            ))}
      </>
    )
  }

  export default AddNewHabit