import tick from './images/check.svg'
import x from './images/x.svg'

const Habit = ({ checkMon, checkTue, checkWed, checkThur, checkFri, checkSat, checkSun, onDelete, habitText }) => {

    return( 
        <>
         <img className="delete-icon" src={x} alt="delete habit" onClick={onDelete} />
         <div className="habit">
             <p>{habitText.title}</p>
         </div>
         <div className={`tick-icon`} onClick={() => checkMon(habitText.id)}><img className={`${habitText.mon ? 'tick-checked' : ''}`} src={tick} alt="tick icon"/></div>
         <div className={`tick-icon`} onClick={() => checkTue(habitText.id)}><img className={`${habitText.tue ? 'tick-checked' : ''}`} src={tick} alt="tick icon"/></div>
         <div className={`tick-icon`} onClick={() => checkWed(habitText.id)}><img className={`${habitText.wed ? 'tick-checked' : ''}`} src={tick} alt="tick icon" /></div>
         <div className={`tick-icon`} onClick={() => checkThur(habitText.id)}><img className={`${habitText.thur ? 'tick-checked' : ''}`} src={tick} alt="tick icon" /></div>
         <div className={`tick-icon`} onClick={() => checkFri(habitText.id)}><img className={`${habitText.fri ? 'tick-checked' : ''}`} src={tick} alt="tick icon" /></div>
         <div className={`tick-icon`} onClick={() => checkSat(habitText.id)}><img className={`${habitText.sat ? 'tick-checked' : ''}`} src={tick} alt="tick icon" /></div>
         <div className={`tick-icon`} onClick={() => checkSun(habitText.id)}><img className={`${habitText.sun ? 'tick-checked' : ''}`} src={tick} alt="tick icon" /></div>
        </>
    )
}

export default Habit