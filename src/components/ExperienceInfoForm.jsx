import { useState } from 'react';

const ExperienceInfoForm = ({ expInfo, handleExpInfoChange, addNewExp }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      {expInfo.map((exp) => {
        return (
          <form key={exp.id} id={exp.id} className="form">
            <label className="label">
              <span className="label-text text-xl">Position</span>
            </label>
            <input
              type="text"
              placeholder="Project Manager"
              className="input input-bordered w-full max-w-xs"
              onChange={handleExpInfoChange}
              data-key="title"
              value={exp.title}
              //id={exp.id}
              disabled={disabled}
            />
            <label className="label">
              <span className="label-text text-xl">Start Date</span>
            </label>
            <input
              type="text"
              placeholder="2002"
              className="input input-bordered w-full max-w-xs"
              onChange={handleExpInfoChange}
              data-key="startDate"
              value={exp.startDate}
              //id={exp.id}
              disabled={disabled}
            />
            <label className="label">
              <span className="label-text text-xl">End Date</span>
            </label>
            <input
              type="text"
              placeholder="2006"
              className="input input-bordered w-full max-w-xs"
              onChange={handleExpInfoChange}
              data-key="endDate"
              value={exp.endDate}
              //id={exp.id}
              disabled={disabled}
            />
            <label className="label">
              <span className="label-text text-xl">Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered w-full max-w-xs"
              placeholder="Effectively upsold products by introducing accessories and other add-ons, adding $150,000 to average monthly sales. Generated brand awareness and positive product impressions to increase sales 22%."
              onChange={handleExpInfoChange}
              data-key="details"
              value={exp.details}
              disabled={disabled}
            ></textarea>
          </form>
        );
      })}
      <button
        className="btn"
        disabled={disabled}
        onClick={() => {
          addNewExp();
        }}
      >
        + Experience
      </button>
      <button
        className="btn"
        type="submit"
        disabled={disabled}
        onClick={() => {
          setDisabled(true);
        }}
      >
        Submit
      </button>
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

export default ExperienceInfoForm;

// const [startDate, setStartDate] = useState(new Date('2014/02/08'));
// const [endDate, setEndDate] = useState(new Date('2024/04/08'));

// <label className="label">
// <span className="label-text text-xl">Start date</span>
// </label>
//    <DatePicker
//                     className="input input-bordered w-20 max-w-xs"
//                     selected={startDate}
//                     onChange={(date) => setStartDate(date)}
//                     selectsStart
//                     startDate={startDate}
//                     endDate={endDate}
//                     dateFormat="yyyy"
//                     showYearPicker
//                   />
//                   <label className="label">
//                     <span className="label-text text-xl">End date</span>
//                   </label>
//                   <DatePicker
//                     className="input input-bordered w-20 max-w-xs"
//                     selected={endDate}
//                     onChange={(date) => setEndDate(date)}
//                     selectsEnd
//                     startDate={startDate}
//                     endDate={endDate}
//                     dateFormat="yyyy"
//                     showYearPicker
//                   />
