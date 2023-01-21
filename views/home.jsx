const React = require('react')
const Def = require('./default')

function home() {
  return (
    <Def>
      <main>
        <h1>REST-Rant</h1>

        <div> <img src="/images/prin.jpg" alt="Food"></img>
          <div>
            Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/backgrounds/things/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

          </div>
        </div>
        <div>
          <a href="/places">
          <button type="button" className="btn btn-primary">Places Page</button>
        </a>
        </div>

      </main>
    </Def>
  )
}

module.exports = home

