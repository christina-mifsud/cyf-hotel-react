import react from "react";

const SearchResults = ({ results }) => {
  const tableRowResults = results.map((person) => (
    <tr key={person.id}>
      <td>{person.id}</td>
      <td>{person.title}</td>
      <td>{person.firstName}</td>
      <td>{person.surname}</td>
      <td>{person.email}</td>
      <td>{person.roomId}</td>
      <td>{person.checkInDate}</td>
      <td>{person.checkOutDate}</td>
      <td></td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>First Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Room ID</th>
          <th>Check In Date</th>
          <th>Check Out Date</th>
          <th>Number of Nights</th>
        </tr>
      </thead>
      <tbody>{tableRowResults}</tbody>
    </table>
  );
};

export default SearchResults;
