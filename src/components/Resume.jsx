import { v4 as uuidv4 } from 'uuid';
const Resume = ({ generalInfo, expInfo }) => {
  return (
    <article className="bg-red-500">
      <h1 className="text-lg font-bold flex items-center justify-center">
        {generalInfo.name}
      </h1>
      <h4 className="flex items-center justify-center text-xs">
        {generalInfo.address}
      </h4>
      <h4 className="flex items-center justify-center text-xs">
        phone: {generalInfo.phone}
      </h4>
      <h4 className="flex items-center justify-center text-xs">
        email: {generalInfo.email}
      </h4>
      <h2>Experience</h2>
      {expInfo.map((exp) => {
        return (
          <div key={uuidv4()}>
            <h3>{exp.title}</h3>
            <h3>
              {exp.startDate} - {exp.endDate}
            </h3>
            <p>{exp.details}</p>
          </div>
        );
      })}
    </article>
  );
};

export default Resume;
