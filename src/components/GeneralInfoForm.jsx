const GeneralInfoForm = ({
  handleNameChange,
  handleAddressChange,
  handlePhoneChange,
  handleEmailChange,
}) => {
  return (
    <form>
      <label className="label">
        <span className="label-text text-xl">Full Name</span>
      </label>
      <input
        type="text"
        placeholder="John Doe"
        className="input input-bordered w-full max-w-xs"
        onChange={handleNameChange}
      />
      <label className="label">
        <span className="label-text text-xl">Address</span>
      </label>
      <input
        type="text"
        placeholder="4 King Ave, Temple Hills, MD 20748"
        className="input input-bordered w-full max-w-xs"
        onChange={handleAddressChange}
      />
      <label className="label">
        <span className="label-text text-xl">Phone</span>
      </label>
      <input
        type="text"
        placeholder="+1-202-555-0117"
        className="input input-bordered w-full max-w-xs"
        onChange={handlePhoneChange}
      />
      <label className="label">
        <span className="label-text text-xl">Email</span>
      </label>
      <input
        type="text"
        placeholder="john_doe@gmail.com"
        className="input input-bordered w-full max-w-xs"
        onChange={handleEmailChange}
      />
    </form>
  );
};

export default GeneralInfoForm;
