const React = require('react')
const Def = require('../default')

function show(data) {
  return (
    <Def>
      <main>

        <h2>{data.place.couisines}</h2>
        <h3>{data.place.pic}</h3>
      <div> 
        <h1>{data.place.name}</h1>
        <h2>Rating</h2>
        <input type= "text" class="comment" id="rating" placeholder="not rated" />
        <label htmlFor="placerate"></label>
            </div>
            <div></div>


        {/* <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
           Edit
        </a>     
        <form method= "POST" action={'/places/${data.id}?_method=DELETE'}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form> */}

<div class="form-group">
    <label for="exampleFormControlTextarea1">Comments Section</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
      </main>
    </Def>
  )
}

module.exports = show
