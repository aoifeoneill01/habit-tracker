const Header = ({ add, showForm }) => {
    return(
       <header>
           <button onClick={add}>{showForm ? 'Close' : 'Add'}</button>
           <h1>Habit Tracker</h1>
       </header>
 )
}

export default Header;