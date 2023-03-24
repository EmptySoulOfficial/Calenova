import './Entry.css'
import Icon from '../../../assets/js/Icon/icon.asset';
import { useMemo } from 'react';
import { emplObj } from '../../../assets/js/EmployeeData/EmployeeData';


function Entry({entryStatus, userId, setcontexmenuitems, setshowEntryInformation, setEmployeeInformation, entryInformation, itemI}) {

    const employeesObject = useMemo(() => (emplObj()))

    let entryIcon = ""
    let entryUserData = employeesObject["employees"][userId]
    let entryUserFirstName = entryUserData["firstName"]
    let entryUserLastName = entryUserData["lastName"]
    let entryUserMail = entryUserData["email"]

    let entryFullname = entryUserFirstName+' '+entryUserLastName

    entryStatus === "Homeoffice" ? entryIcon = "home" : entryStatus === "Vacation" ? entryIcon = "palme": 
        entryStatus === "Training" ? entryIcon = "university" : entryStatus === "Ill" ? entryIcon = "thermometer" : 
            entryStatus === "Absent" ? entryIcon = "clock" : entryIcon = "heart";

    return(
        <div className={(itemI > 2 ? "Entry-Hidden" : "Entry") } onMouseOver={() => {setshowEntryInformation(true); setEmployeeInformation(entryInformation)}} onMouseLeave={() => (setshowEntryInformation(false))}>
            <p className="Entry-Name">{entryFullname}</p>
            <div className={"Entry-Status Entry-Status-"+entryStatus}>
                <Icon name={entryIcon} size="16" />
            </div>
        </div>
    )
}

export default Entry;