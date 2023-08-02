import { useState } from 'react';

const GeneralInfoForm = ({ onChange, generalInfo }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      <form
        id="gen-form"
        onSubmit={(e) => {
          e.preventDefault();
          setDisabled(true);
        }}
      >
        <label className="label">
          <span className="label-text text-base">Full Name</span>
        </label>
        <input
          type="text"
          placeholder="John Doe"
          className="input input-bordered input-sm w-full"
          onChange={onChange}
          data-key="name"
          value={generalInfo.name}
          disabled={disabled}
        />

        <label className="label">
          <span className="label-text text-base">Address</span>
        </label>
        <input
          type="text"
          placeholder="4 King Ave, Temple Hills, MD 20748"
          className="input input-bordered input-sm w-full "
          onChange={onChange}
          data-key="address"
          value={generalInfo.address}
          disabled={disabled}
        />

        <label className="label">
          <span className="label-text text-base">Phone</span>
        </label>
        <input
          type="text"
          placeholder="+1-202-555-0117"
          className="input input-bordered input-sm w-full "
          onChange={onChange}
          data-key="phone"
          value={generalInfo.phone}
          disabled={disabled}
        />

        <label className="label">
          <span className="label-text text-base">Email</span>
        </label>
        <input
          type="text"
          placeholder="john_doe@gmail.com"
          className="input input-bordered input-sm w-full "
          onChange={onChange}
          data-key="email"
          value={generalInfo.email}
          disabled={disabled}
        />
      </form>
      <div className="card-actions justify-end pt-4">
        <button
          form="gen-form"
          className="btn btn-sm"
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
        <button
          className="btn btn-sm"
          disabled={!disabled}
          onClick={() => {
            setDisabled(false);
          }}
        >
          Edit
        </button>
      </div>
    </>
  );
};

export default GeneralInfoForm;
