import { useState } from 'react';
import './App.css';

import GeneralInfoForm from './components/GeneralInfoForm';
import Resume from './components/Resume';

function App() {
  const [name, setName] = useState('John Doe');
  const [address, setAddress] = useState('4 King Ave, Temple Hills, MD 20748');
  const [phone, setPhone] = useState('+1-202-555-0117');
  const [email, setEmail] = useState('john_doe@gmail.com');

  const handleNameChange = (e) => {
    e.target.value ? setName(e.target.value) : setName('John Doe');
  };
  const handleAddressChange = (e) => {
    e.target.value
      ? setAddress(e.target.value)
      : setAddress('4 King Ave, Temple Hills, MD 20748');
  };
  const handlePhoneChange = (e) => {
    e.target.value ? setPhone(e.target.value) : setPhone('+1-202-555-0117');
  };
  const handleEmailChange = (e) => {
    e.target.value ? setEmail(e.target.value) : setEmail('john_doe@gmail.com');
  };

  return (
    <>
      <h1>Resume builder</h1>
      <main className="grid grid-cols-2">
        <article className="bg-yellow-500">
          <section>
            <h2>General Information</h2>
            <GeneralInfoForm
              handleNameChange={handleNameChange}
              handleAddressChange={handleAddressChange}
              handlePhoneChange={handlePhoneChange}
              handleEmailChange={handleEmailChange}
            />
          </section>
        </article>

        <Resume name={name} address={address} phone={phone} email={email} />
      </main>
    </>
  );
}

export default App;
