import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
//import DatePicker from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';

import GeneralInfoForm from './components/GeneralInfoForm';
import ExperienceInfoForm from './components/ExperienceInfoForm';
import Resume from './components/Resume';
import EducationInfoForm from './components/EducationInfoForm';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
  });

  const [expInfo, setExpInfo] = useState([
    {
      title: '',
      company: '',
      startDate: '',
      endDate: '',
      details: '',
      id: uuidv4(),
    },
  ]);

  const [eduInfo, setEduInfo] = useState([
    {
      degree: '',
      school: '',
      startDate: '',
      endDate: '',
      id: uuidv4(),
    },
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

  const handleEduInfoChange = (e) => {
    const inputValue = e.target.value;
    const { key } = e.target.dataset;
    const form = e.target.closest('.form');
    const id = form.id;

    setEduInfo(
      eduInfo.map((edu) => {
        if (edu.id === id) edu[key] = inputValue;
        return edu;
      })
    );
  };

  const addNewExp = () => {
    setExpInfo([
      ...expInfo,
      {
        title: '',
        company: '',
        startDate: '',
        endDate: '',
        details: '',

        id: uuidv4(),
      },
    ]);
  };

  const addNewEdu = () => {
    setEduInfo([
      ...eduInfo,
      {
        degree: '',
        school: '',
        startDate: '',
        endDate: '',
        id: uuidv4(),
      },
    ]);
  };

  return (
    <>
      <h1 className="flex items-center justify-center text-3xl bold font-bold tracking-wider p-5 uppercase">
        Resume builder
      </h1>
      <main className="bg-gray-100 flex justify-center  ">
        <article className="p-10 overflow-scroll h-screen min-w-min max-w-max items-center justify-items-center">
          <section className="card w-auto bg-base-100 shadow-xl card-bordered ">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">
                General Information
              </h2>
              <GeneralInfoForm
                onChange={handleGeneralInfoChange}
                generalInfo={generalInfo}
              />
            </div>
          </section>
          <section className="card w-96 bg-base-100 shadow-xl card-bordered my-5">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Experience</h2>
              <ExperienceInfoForm
                expInfo={expInfo}
                handleExpInfoChange={handleExpInfoChange}
                addNewExp={addNewExp}
              />
            </div>
          </section>
          <section className="card w-96 bg-base-100 shadow-xl card-bordered my-5">
            <div className="card-body">
              <h2 className="card-title text-xl font-bold">Education</h2>
              <EducationInfoForm
                eduInfo={eduInfo}
                handleEduInfoChange={handleEduInfoChange}
                addNewEdu={addNewEdu}
              />
            </div>
          </section>
        </article>

        <Resume generalInfo={generalInfo} expInfo={expInfo} eduInfo={eduInfo} />
      </main>
    </>
  );
}

export default App;
