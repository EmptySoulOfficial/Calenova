import "./Days.css";
import { getLang, getLangVar } from "../../../assets/js/ELanguage/ELanguage";
import Icon from "../../../assets/js/Icon/icon.asset";
import Entry from "../Entry/Entry";
import { getMonths } from "../../../assets/js/Months/Months.asset";
import { useMemo, memo } from "react";



const DaysItem = ({ children, _day, changeCurrentDay, setshowAddBox }) => {


    const months = useMemo(() => getMonths());
    const currentDate = useMemo(() => new Date(), []);

    if (children.length > 3){
      console.log('-----zu lang')
    }

    return (
        <div
        key={'' + _day.Date}
        className={
          "Days" +
          (_day.currentMonth ? " CurrentDay" : "") +
          (_day.selected
            ? _day.date.getFullYear() === currentDate.getFullYear() &&
              _day.date.getMonth() === currentDate.getMonth() &&
              _day.date.getDate() === currentDate.getDate()
              ? " selected-today"
              : " selected"
            : "")
        }
      >
        <div
          className="Days-Head"
          onClick={() => {
            changeCurrentDay(_day);
          }}
        >
          <div
            className="addButton"
            onClick={() => {
              setshowAddBox(true);
            }}
          >
            <Icon name="addsmooth" size="16" />
          </div>
          <p className="Days-CurrentMonth">{months[_day.month]}</p>
          <p className="DateNumber">{_day.number}</p>
        </div>
        <div className="Days-MainContainer">
          { children }
        </div>
      </div>
    )


}

export default DaysItem;