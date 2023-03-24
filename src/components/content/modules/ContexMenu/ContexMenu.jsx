import './ContexMenu.css'

function ContexMenu ({contexmenuItems, showContexMenu, mousePos}) {
    

    return(
        <div className={"ContexMenu " + (showContexMenu ? "ContexMenu-Display" : "")} style={{left: `${mousePos.x + 2}px`, top: `${mousePos.y + 2}px`}}>
            {contexmenuItems.map((contexItem)=>(
                <div className="ContexMenu-Item">
                    {contexItem}
                </div>
            ))}
        </div>
    )

}

export default ContexMenu