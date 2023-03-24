import './AddBox.css'
import { useState } from 'react';
import Icon from '../../../assets/js/Icon/icon.asset.jsx'
import {getLang} from '../../../assets/js/ELanguage/ELanguage'
import ButtonAddStatus from '../../molecules/buttons/ButtonAddStatus/ButtonAddStatus';

function AddBox({showAddBox, setshowAddBox}) {

    const eLang = getLang();
    let [statusnotesValue, setstatusnotesValue] = useState('')

    const [buttonaddstatusState, buttonaddstatusChange] = useState({
        activeButton: null,
        buttonObjects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
    });

    const addStButtonLabels = {0: eLang.Homeoffice, 1: eLang.Vacation, 2: eLang.Professional_Development, 3: eLang.Ill, 4: eLang.Absent};
    const addStButtonIcons = {0: 'home', 1: 'palme', 2: 'university', 3: 'thermometer', 4: 'clock'};

    const handleChangeNote = (event) => {
        setstatusnotesValue(event.target.value);
    }

    function toggleActive(index){
        buttonaddstatusChange({...buttonaddstatusState, activeButton: buttonaddstatusState.buttonObjects[index]})
    }

    function toggleActiveStyles(index){
        if(buttonaddstatusState.buttonObjects[index] === buttonaddstatusState.activeButton){
            return "Button-AddStatus-Object--active";
        }else{
            return "Button-AddStatus-Object"
        }
    }

    function resetToggles(index, statusnotesValue) {
        index = -1;
        toggleActive(index);
        setstatusnotesValue('');
    }


    return(
    <div className={"AddBox "+(showAddBox ? "" : "AddBox-Hidden")}>
        <div className="AddBox-Headline">
            <p className="Dialog-Titel Text-Default">{eLang.Title__Add_Status}</p>
            <div className="Button-Close-Dialog" onClick={()=>{setshowAddBox(false);resetToggles()}}><Icon name="closesmooth"/></div>
        </div>
        <div className="AddBox-Container-Buttons">
        
            {buttonaddstatusState.buttonObjects.map((elements, index)=> (
                <div onClick={() => {toggleActive(index)}} className={toggleActiveStyles(index)}>
                    <ButtonAddStatus  icon={addStButtonIcons[index]} label={addStButtonLabels[index]} index={index}/>
                </div>
                
            ))}
            
        </div>
        <div className="AddBox-Container-Dates">
            <p className="Text-Default">{eLang.from}</p><input className="AddBox-Date-Input" type="date"></input><p className="Text-Default">{eLang.to}</p><input className="AddBox-Date-Input" type="date"></input>
        </div>
        <div className="AddBox-Container-Notes">
            <textarea className="AddBox-Textarea" placeholder={eLang.Placeholder__Add_Entry_Note} value={statusnotesValue} onChange={handleChangeNote}></textarea>
        </div>
        <div className="AddBox-Container-SaveButton">
            <button className="Button-Save">{eLang.Save}</button>
        </div>
    </div>
    )

}

export default AddBox