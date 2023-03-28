import React, { Component, useMemo, useState } from "react";
import "./Calendar.css";
import Days from "../modules/Days/Days";
import { getLang, getLangVar } from "../../assets/js/ELanguage/ELanguage";
import Icon from "../../assets/js/Icon/Icon";
import AddBox from "../modules/AddBox/AddBox";
import { getMonths } from "../../assets/js/Months/Months.asset";
import SideBar from "../modules/SideBar/SideBar";

const Calendar = ({setcontexmenuItems,setshowEntryInformation, setEmployeeInformation}) => {
  const eLang = useMemo(() => getLang(), []);
  const months = useMemo(() => getMonths(), []);
  const weekdays = useMemo(() => [
    eLang.Monday,
    eLang.Tuesday,
    eLang.Wednesday,
    eLang.Thursday,
    eLang.Friday,
    eLang.Saturday,
    eLang.Sunday,
  ], []);

  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDay = (day) => {
    setCurrentDate(new Date(day.year, day.month, day.number));
  };

  const handleSetNextDay = () => {
    setCurrentDate(new Date(currentDate.setDate(32)))
  };

  const handleSetPreviousDay = () => {
    setCurrentDate(new Date(currentDate.setDate(0)))
  };

  const handleSetCurrentDay = () => {
    setCurrentDate(new Date());
  };


  const [showAddBox, setshowAddBox] = useState(false);

  return (
    <div className="Calendar">
      <AddBox setshowAddBox={setshowAddBox} showAddBox={showAddBox}/>
      <div className="Calendar-Headline">
        <p className="Calendar-Year-Label">{currentDate.getFullYear()}</p>
        <div className="Month-Container">
          <button className="Button-Month-Back" onClick={handleSetPreviousDay}>
            <Icon name="backarrow_smooth" size="16" />
          </button>
          <button className="Button-Month-Today" onClick={handleSetCurrentDay}>
            <span className="material-test">{getLangVar("Today")}</span>
          </button>
          <button onClick={handleSetNextDay} className="Button-Month-For">
            <Icon name="forarrow_smooth" size="16" />
          </button>
          <p className="CurrentDate-Text">
            {currentDate.getDate()}{" "}
            {months[currentDate.getMonth()].substring(0, 12)}
          </p>
        </div>
        <div className="Menu-Container">
          <button className="Menu">
            <Icon name="burgermenu_smooth" size="16" />
          </button>
        </div>
      </div>
      <div className="Calendar-Container">
        <div className="Calendar-Content-Container">
          <div className="Calendar-Week-Container">
            {months.map((w) => (
              <p key={w} className="Day-Label">
                {w}
              </p>
            ))}
          </div>
          <div className="Calendar-Month-Container">
          {
            months.map((m) => (
              <div className="Month-Item">
              <div className="Days">
              </div>
            </div>
            ))
          }
              
          </div>
          {/* <div className="Calendar-Days-Container">
          {/*   <div className="Calendar-Days">
          {/*   <Days setEmployeeInformation={setEmployeeInformation} day={currentDate} changeCurrentDay={changeCurrentDay} setshowAddBox={setshowAddBox} setcontexmenuItems={setcontexmenuItems} setshowEntryInformation={setshowEntryInformation}/>
          {/*   </div>
          {/* </div>
            */}
        </div>
        <SideBar />
      </div>
      
    </div>
  );
};

export default Calendar;
