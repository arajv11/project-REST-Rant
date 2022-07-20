const React = require('react')
const Def = require('../default')

function index (data) {
    console.log(data)
    let placesFormatted = data.places.map((place) => {
        return (
            <div className="col-sm-3">
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={place.pic} alt={place.name} style={{width:"100%"}}/>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
                <br/>
                <br/>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <br/>
                <br/>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    )
}

module.exports = index