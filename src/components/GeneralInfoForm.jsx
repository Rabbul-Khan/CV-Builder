import { useState } from 'react';

const GeneralInfoForm = ({ onChange, generalInfo }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDisabled(true);
        }}
      >
        <label className="label">
          <span className="label-text text-xl">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="input input-bordered w-full max-w-xs"
          onChange={onChange}
          data-key="name"
          value={generalInfo.name}
          disabled={disabled}
        />
        <label className="label">
          <span className="label-text text-xl">Address</span>
        </label>
        <input
          type="text"
          placeholder="4 King Ave, Temple Hills, MD 20748"
          className="input input-bordered w-full max-w-xs"
          onChange={onChange}
          data-key="address"
          value={generalInfo.address}
          disabled={disabled}
        />
        <label className="label">
          <span className="label-text text-xl">Phone</span>
        </label>
        <input
          type="text"
          placeholder="+1-202-555-0117"
          className="input input-bordered w-full max-w-xs"
          onChange={onChange}
          data-key="phone"
          value={generalInfo.phone}
          disabled={disabled}
        />
        <label className="label">
          <span className="label-text text-xl">Email</span>
        </label>
        <input
          type="text"
          placeholder="john_doe@gmail.com"
          className="input input-bordered w-full max-w-xs"
          onChange={onChange}
          data-key="email"
          value={generalInfo.email}
          disabled={disabled}
        />
        <button className="btn" type="submit" disabled={disabled}>
          Submit
        </button>
      </form>
      <button
        className="btn"
        disabled={!disabled}
        onClick={() => {
          setDisabled(false);
        }}
      >
        Edit
      </button>
    </>
  );
};

export default GeneralInfoForm;
