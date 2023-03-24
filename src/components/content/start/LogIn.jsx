import './LogIn.css'

function LogIn() {
    

    return(
    <div className="LogIn-Window">
        <div className="LogIn">
            <input type="text" placeholder="Name Nachname"></input>
            <input type="Password" placeholder="Password"></input>
            <button type="button">LogIn</button>
        </div>
    </div>
    )

}

export default LogIn