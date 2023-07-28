import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

import GeneralInfoForm from './components/GeneralInfoForm';
import ExperienceInfoForm from './components/ExperienceInfoForm';
import Resume from './components/Resume';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [expInfo, setExpInfo] = useState([
    { title: '', startDate: '', endDate: '', details: '', id: uuidv4() },
  ]);

  const handleGeneralInfoChange = (e) => {
    const { key } = e.target.dataset;
    setGeneralInfo({ ...generalInfo, [key]: e.target.value });
  };

  const handleExpInfoChange = (e) => {
    const inputValue = e.target.value;
    const { key } = e.target.dataset;
    const form = e.target.closest('.form');
    const id = form.id;

    setExpInfo(
      expInfo.map((exp) => {
        if (exp.id === id) exp[key] = inputValue;
        return exp;
      })
    );
  };

  const addNewExp = () => {
    setExpInfo([
      ...expInfo,
      { title: '', startDate: '', endDate: '', details: '', id: uuidv4() },
    ]);
  };

  return (
    <>
      <h1>Resume builder</h1>
      <main className="grid grid-cols-2">
        <article className="bg-yellow-500 p-10">
          <section>
            <h2 className="text-xl font-bold">General Information</h2>
            <GeneralInfoForm
              onChange={handleGeneralInfoChange}
              generalInfo={generalInfo}
            />
          </section>
          <section>
            <h2 className="text-xl font-bold pt-5">Experience</h2>
            <ExperienceInfoForm
              expInfo={expInfo}
              handleExpInfoChange={handleExpInfoChange}
              addNewExp={addNewExp}
            />
          </section>
        </article>
        <Resume generalInfo={generalInfo} expInfo={expInfo} />
      </main>
    </>
  );
}

export default App;
