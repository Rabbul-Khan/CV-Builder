const Resume = ({ name, address, phone, email }) => {
  return (
    <article className="bg-red-500">
      <h1 className="text-lg font-bold flex items-center justify-center">
        {name}
      </h1>
      <h2 className="flex items-center justify-center text-xs">{address}</h2>
      <h2 className="flex items-center justify-center text-xs">
        phone: {phone}
      </h2>
      <h2 className="flex items-center justify-center text-xs">
        email: {email}
      </h2>
    </article>
  );
};

export default Resume;
