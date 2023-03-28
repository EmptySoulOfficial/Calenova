import "./Days.css";
import { getLang, getLangVar } from "../../../assets/js/ELanguage/ELanguage";
import Icon from "../../../assets/js/Icon/Icon";
import Entry from "../Entry/Entry";
import { getMonths } from "../../../assets/js/Months/Months.asset";
import { useMemo, useState } from "react";
import DaysItem from "./DayItem";
import { emplObj } from "../../../assets/js/EmployeeData/EmployeeData";
import MapEntries from "./MapEntries";

const Days = ({ day, changeCurrentDay, setshowAddBox, setcontexmenuitems, setshowEntryInformation, setEmployeeInformation }) => {

  const employeesObject = emplObj()

  const firstDayOfMonth = useMemo(
    () => new Date(day.getFullYear(), day.getMonth(), 0),
    [day]
  );

  const [selectedDay, setSelectedDay] = useState(new Date());

  let weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = useMemo(() => {
    const _currentDays = [];

    for (let _day = 0; _day < 360; _day++) {
      if (_day === 0 && weekdayOfFirstDay === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
      } else if (_day === 0) {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + (_day - 1));
      } else {
        firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
      }

      const calendarDay = {
        currentMonth: firstDayOfMonth.getMonth() === day.getMonth(),
        date: new Date(firstDayOfMonth),
        month: firstDayOfMonth.getMonth(),
        number: firstDayOfMonth.getDate(),
        selected: firstDayOfMonth.toDateString() === day.toDateString(),
        currentDay:
          firstDayOfMonth.toDateString() ===
          new Date(firstDayOfMonth.toDateString()),
        year: firstDayOfMonth.getFullYear(),
      };

      _currentDays.push(calendarDay);
    }

    return _currentDays;
  }, [day]);

  let yearNumber = "2023"
  


  return (
    <>
      {currentDays.map((_day, index) => (
        <DaysItem key={index} _day={_day} changeCurrentDay={changeCurrentDay} setshowAddBox={setshowAddBox}>
          <MapEntries index={index} dayNumber={_day.number} monthNumber={_day.month} yearNumber={yearNumber} setcontexmenuitems={setcontexmenuitems} setshowEntryInformation={setshowEntryInformation} setEmployeeInformation={setEmployeeInformation} />
        </DaysItem>
            
      ))}
    </>
  );
};

export default Days;
