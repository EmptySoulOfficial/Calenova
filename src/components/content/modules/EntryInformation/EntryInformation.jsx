import './EntryInformation.css'
import Icon from '../../../assets/js/Icon/icon.asset'
import { useRef } from 'react';

function EntryInformation ({information,mousePos, showEntryInformation}) {

    const ref = useRef(null);
    
    return(
        <div ref={ref} style={{left: `${mousePos.x + 10}px`, top: `${mousePos.y + 10}px`}} className={"Entry-Information " + (showEntryInformation ? "Entry-Information-Show" : "")}>
            <Icon name="information"/>
            <div className="Entry-Information-Text">
                {information}
            </div>
        </div>
    )
}

export default EntryInformation