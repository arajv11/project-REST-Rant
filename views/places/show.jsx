const React = require('react')
const Def = require('../default')

function show (data) {
    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    let rating = (
      <h3 className="inactive">
        Not yet rated
      </h3>
    )
    if (data.place.comments.length) {
      let sumRatings = data.place.comments.reduce((tot, c) => {
        return tot + c.stars
      }, 0)
      let averageRating = Math.round(sumRatings / data.place.comments.length)
      let stars = ''
      for (let i = 0; i < averageRating; i++) {
        stars += 'â­ï¸'
      }
      rating = (
        <h3>
          {stars} stars
        </h3>
      )
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <strong>- {c.author}</strong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
          <main className="row bg-warning add-margin">
            <h1 className="text-info bg-danger add-padding">{ data.place.name }</h1>
            <div className="row col-6">
              <h2 className="text-info bg-secondary add-padding">Rating</h2>
              <h3>{rating}</h3>
              <br/>
              <h2 className="text-info bg-secondary add-padding">Description</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Cuisines: { data.place.cuisines }</h4>
            </div>
            <div className="col-6">
              <img src={ data.place.pic } alt={ data.place.name } className="col-6"/>
            </div>
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
              Edit
            </a>     
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
            <br/>
            <br/>
            <br/>
            <h2 className="text-info bg-secondary add-padding">Comments</h2>
            <h3>{comments}<br/></h3>
            <h2 className="text-info bg-secondary add-padding">Got your own rant or rave?</h2>
            <form method="POST" action={`/places/${data.place.id}/comment`} style={{margin:"0"}} className="row">
              <div className="form-group col-4">
                <label htmlFor="author">Author</label>
                <input className="form-control" id="author" name="author"/>
              </div>
              <div className="form-group col-4">
                <label htmlFor="content">Content</label>
                <input className="form-control" id="content" name="content"/>
              </div>
              <div className="form-group col-2">
                <label htmlFor="stars">Star Rating</label>
                <input id="stars" name="stars" type="range" min="0" max="5" step="0.5"/>
              </div>
              <div className="form-group col-2">
                <label htmlFor="rant">Rant</label>
                <br/>
                <input id="rant" name="rant" type="checkbox"/>
              </div>
              <br/>
              <br/>
              <br/>
              <br/>
              <div>
                <input className="btn btn-primary" type="submit" value="Add Comment" style={{width:"130px"}}/>
              </div>
              <br/>
              <br/>
              <br/>
            </form>
          </main>
        </Def>
    )
}

module.exports = show