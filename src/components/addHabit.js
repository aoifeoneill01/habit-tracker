import { useState} from 'react'

const AddHabit = ({ addHabit, setShowForm }) => {

    const [title, setTitle] = useState('')
    const [mon, setMon] = useState(false)
    const [tue, setTue] = useState(false)
    const [wed, setWed] = useState(false)
    const [thur, setThur] = useState(false)
    const [fri, setFri] = useState(false)
    const [sat, setSat] = useState(false)
    const [sun, setSun] = useState(false)


    const onSubmit = (e) => {

        e.preventDefault()

        if(!title){
            alert('Please add Habit')
            return
        }

        setShowForm(false)
        addHabit({ title, mon, tue, wed, thur, fri, sat, sun })
       
        setTitle('')
        setMon(false)
        setTue(false)
        setWed(false)
        setThur(false)
        setFri(false)
        setSat(false)
        setSun(false)
        
    }

    return(
        <form onSubmit={onSubmit}>
            <label><b>Add New Habit</b></label> 

            <input type="text" value={title} placeholder="Type name here"
            onChange={(e) => setTitle(e.target.value)} />

            <div className="display">
                <input type="checkbox" value={mon}/>
                <input type="checkbox" value={wed}/>
                <input type="checkbox" value={tue}/>
                <input type="checkbox" value={thur}/>
                <input type="checkbox" value={fri}/>
                <input type="checkbox" value={sat}/>
                <input type="checkbox" value={sun}/>
            </div>

            <input className="submit-btn" type="submit" value="Add" />
        </form>

    )
}

export default AddHabit;