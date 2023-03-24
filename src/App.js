//import logo from './logo.svg';
import './App.css';
import Calendar from './components/content/Calendar/Calendar';

import { getLang } from './components/assets/js/ELanguage/ELanguage.js'
import { useMemo, memo, useState, useEffect } from 'react';
import ContexMenu from './components/content/modules/ContexMenu/ContexMenu';
import EntryInformation from './components/content/modules/EntryInformation/EntryInformation';
//import LogIn from './components/content/start/LogIn.jsx'

function App() {

  const User = {}

  const EmployeesData = {}

  const eLang = useMemo(() => getLang());
  const [contexmenuItems, setcontexmenuItems] = useState(["Nothing to Edit"])
  const [showcontexmenu, setshowcontexmenu] = useState(false)
  const [showEntryInformation, setshowEntryInformation] = useState(false)

  const [employeeInformation, setEmployeeInformation] = useState('');

  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // document.addEventListener("contextmenu", (event) => {
      // event.preventDefault();
    // });
    // 
    // window.addEventListener("contextmenu", (event, handleMouseMove) => {
      // setshowcontexmenu(!showcontexmenu);
    // });

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };

    
  }, []);



  return (
      <div className="App">
        <header className="App-header">
          Header {eLang.test}
        </header>
        <div className="App-Container">
          <ContexMenu mousePos={mousePos} contexmenuItems={contexmenuItems} showContexMenu={showcontexmenu}/>
          <EntryInformation mousePos={mousePos} showEntryInformation={showEntryInformation} information={employeeInformation}/>

          <Calendar setcontexmenuItems={setcontexmenuItems} setshowEntryInformation={setshowEntryInformation} setEmployeeInformation={setEmployeeInformation} />
        </div>
      </div>
  );
}

export default App;
