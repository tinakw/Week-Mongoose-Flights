const React = require('react');
// const DefaultLayout= require('..components')
const Index = (props) => {
  return (

    // <DefaultLayout title={"Flights Index Page"}>
    <div>
      <h1>Index Route</h1>
      <a href= "/flights/new">Create a New Flight!</a>
      {/* In here goes your list of all of the flights and their info */}
      <ul>
    {
        props.flights.map((flight, index)=>{
          return (
            // <ListItem key={index} flight={flight} />
            <li key={index}>
                The <a href={`/flights/${flight._id}`}>{flight.airline}</a> is {flight.flightNo} {flight.departs ? " datetime-local" : "one year from date created!"}
              </li>
          )
        })
      }
        </ul>
    </div>
    // </DefaultLayout>
  )
}

module.exports = Index;