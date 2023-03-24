import './Days.css'
import Entry from '../Entry/Entry'
import { emplObj } from '../../../assets/js/EmployeeData/EmployeeData'
import { useMemo, useState } from 'react'


function MapEntries ({setEmployeeInformation, setshowEntryInformation, information, setcontexmenuitems, dayNumber, monthNumber, yearNumber}) {

    const employeesObject = useMemo(() => (emplObj()))

    let entries = ""
    let note = useMemo(() => (""))
    let entryStatus = ""
    let entryInformation = "No Informations"

    


    if(employeesObject["entries"][monthNumber] && employeesObject["entries"][monthNumber][dayNumber]) {

        entries = Object.keys(employeesObject["entries"][monthNumber][dayNumber])
        // note = entries.map((key, i) => (
            // <Entry key={i} user={i} entryStatus={entryStatus} entryInformation={entryInformation} setcontexmenuitems={setcontexmenuitems} setshowEntryInformation={setshowEntryInformation} setEmployeeInformation={setEmployeeInformation} />
    //    ))
  } else {
   entries = null
  }


    note = useMemo(() => (entries?.map((key, i) => {
        if(employeesObject["entries"][monthNumber][dayNumber][i]) {
            entryInformation = employeesObject["entries"][monthNumber][dayNumber][i].entryInformation
            console.log(i)
            return(
                <Entry key={i} itemI={i}  userId={employeesObject["entries"][monthNumber][dayNumber][i].userId} entryStatus={employeesObject["entries"][monthNumber][dayNumber][i].entryStatus} entryInformation={employeesObject["entries"][monthNumber][dayNumber][i].entryInformation} setcontexmenuitems={setcontexmenuitems} setshowEntryInformation={setshowEntryInformation} setEmployeeInformation={setEmployeeInformation} />
            )
        }
    })
    ))

  return(
<>
 {note}
 </>
  )
}

export default MapEntries