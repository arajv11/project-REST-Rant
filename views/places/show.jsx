const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main className="row bg-warning add-margin">
            <h1 className="text-info bg-danger add-padding">{ data.place.name }</h1>
            <br/>
            <br/>
            <div className="row col-6">
              <h2 className="text-info bg-secondary add-padding">Rating</h2>
              <h3>currently unrated</h3>
              <br/>
              <h2 className="text-info bg-secondary add-padding">Description</h2>
              <h3>Located in { data.place.city }, { data.place.state }</h3>
              <h3>Cuisines: { data.place.cuisines }</h3>
            </div>
            <div className="col-6">
              <img src={ data.place.pic } alt={ data.place.name } className="col-6"/>
            </div>
            <h2 className="text-info bg-secondary add-padding">Comments</h2>
            <h3>No comments yet!</h3>
            <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form> 
          </main>
        </Def>
    )
}

module.exports = show