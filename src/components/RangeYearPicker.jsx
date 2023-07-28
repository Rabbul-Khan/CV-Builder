import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RangeYearPicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  // const [startDate, setStartDate] = useState(new Date('2010'));
  // const [endDate, setEndDate] = useState(new Date('2023'));
  return (
    <>
      <div>
        <label className="label">
          <span className="label-text text-xl ">Start date</span>
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          minDate={new Date('2000')}
          maxDate={new Date('2023')}
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy"
          showYearPicker
          className="input w-full max-w-xs"
        />
      </div>

      <label className="label">
        <span className="label-text text-xl">End date</span>
      </label>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        minDate={new Date('2000')}
        maxDate={new Date('2023')}
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy"
        showYearPicker
        className="input w-full max-w-xs"
      />
    </>
  );
};

export default RangeYearPicker;
