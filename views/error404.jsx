const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img src="/images/error404.jpg" alt="pagenotfound"/>
                <div>
                  Photo by <a href="https://unsplash.com/@danielkcheung?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Daniel K Cheung</a> on <a href="https://unsplash.com/images/feelings/funny?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
              </div>
          </main>
      </Def>
    )
  }
  
module.exports = error404