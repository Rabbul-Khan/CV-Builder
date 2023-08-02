import { useState } from 'react';

const EducationInfoForm = ({ eduInfo, handleEduInfoChange, addNewEdu }) => {
  const [disabled, setDisabled] = useState(false);
  return (
    <>
      {eduInfo.map((edu) => {
        return (
          <form key={edu.id} id={edu.id} className="form">
            <label className="label">
              <span className="label-text text-base">Degree</span>
            </label>
            <input
              type="text"
              placeholder="BS in Computer Science and Engineering"
              className="input input-bordered input-sm w-full max-w-xs"
              onChange={handleEduInfoChange}
              data-key="degree"
              value={edu.degree}
              disabled={disabled}
            />
            <label className="label">
              <span className="label-text text-base">School</span>
            </label>
            <input
              type="text"
              placeholder="ABC University"
              className="input input-bordered input-sm w-full max-w-xs"
              onChange={handleEduInfoChange}
              data-key="school"
              value={edu.school}
              disabled={disabled}
            />

            <label className="label">
              <span className="label-text text-base">Start Date</span>
            </label>
            <input
              type="text"
              placeholder="1998"
              className="input input-bordered input-sm w-full max-w-xs"
              onChange={handleEduInfoChange}
              data-key="startDate"
              value={edu.startDate}
              disabled={disabled}
            />
            <label className="label">
              <span className="label-text text-base">End Date</span>
            </label>
            <input
              type="text"
              placeholder="2002"
              className="input input-bordered input-sm w-full max-w-xs"
              onChange={handleEduInfoChange}
              data-key="endDate"
              value={edu.endDate}
              disabled={disabled}
            />
            <div className="mt-5 h-0 border border-gray-300"></div>
          </form>
        );
      })}
      <div className="card-actions justify-end pt-3">
        <button
          className="btn btn-sm"
          disabled={disabled}
          onClick={() => {
            addNewEdu();
          }}
        >
          + Education
        </button>
        <button
          className="btn btn-sm"
          type="submit"
          disabled={disabled}
          onClick={() => {
            setDisabled(true);
          }}
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

export default EducationInfoForm;

// const [startDate, setStartDate] = useState(new Date('2014/02/08'));
// const [endDate, setEndDate] = useState(new Date('2024/04/08'));

// <label className="label">
// <span className="label-text text-base">Start date</span>
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
//                     <span className="label-text text-base">End date</span>
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
