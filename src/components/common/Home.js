import React from 'react'
import { Link } from 'react-router-dom'
import YoutubeBackground from 'react-youtube-background'


const Home = () => (
  <>
    <YoutubeBackground videoId={'Ss402giBAqM'}>
      <Link to="/jets">
        <section className="hero">
          <div className="hero-body">
            <div className="container">

            </div>
          </div>
        </section>
      </Link>
    </YoutubeBackground>
  </>
)

export default Home