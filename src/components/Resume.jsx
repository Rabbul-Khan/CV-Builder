import { v4 as uuidv4 } from 'uuid';
const Resume = ({ generalInfo, expInfo, eduInfo }) => {
  return (
    <article className=" p-8 w-11/12 max-w-4xl">
      <h1 className="text-2xl font-bold flex items-center justify-center text-center tracking-wide pb-2 uppercase">
        {generalInfo.name}
      </h1>
      <h4 className="flex items-center justify-center text-xs text-center tracking-wide pb-1">
        {generalInfo.address}
      </h4>
      <h4 className="flex items-center justify-center text-xs text-center tracking-wide pb-1">
        Phone: {generalInfo.phone}
      </h4>
      <h4 className="flex items-center justify-center text-xs text-center tracking-wide pb-1">
        Email: {generalInfo.email}
      </h4>
      <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700" />
      <h2 className="uppercase text-base font-bold">Experience</h2>
      {expInfo.map((exp) => {
        return (
          <div key={uuidv4()}>
            <h3 className="text-sm">{exp.title}</h3>
            <h3 className="text-sm italic">
              {exp.company}, {exp.startDate} - {exp.endDate}
            </h3>

            <p className="text-sm">{exp.details}</p>
          </div>
        );
      })}
      <h2 className="uppercase text-base font-bold">Education</h2>

      {eduInfo.map((edu) => {
        return (
          <div key={uuidv4()} className="">
            <h3 className="text-sm">{edu.degree}</h3>
            <h3 className="text-sm italic">
              {edu.school}, {edu.startDate} - {edu.endDate}
            </h3>
          </div>
        );
      })}
    </article>
  );
};

export default Resume;
