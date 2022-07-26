import React from 'react'

function home() {
  return (
    <>
      <main>
        <section className="container">
          <div>
            <div className="hero-section">
              <p>
                Learn how to build Interactive websites. Get to learn from
                professionals
              </p>
              <button href="#">Apply Now</button>
            </div>
            <div className="training-tracks">
              <h1>Training Tracks</h1>
              <div className="training-track-row">
                <div className="training-track-card">
                  <h2>Fullstack Software Engineering</h2>
                  <p>React,.Net, C#</p>
                </div>
                <div className="training-track-card">
                  <h2>Agile product management</h2>
                  <p>React,.Net, C#</p>
                </div>
                <div className="training-track-card">
                  <h2>Data science/DB management</h2>
                  <p>React,.Net, C#</p>
                </div>
              </div>
              <div className="training-track-row">
                <div className="training-track-card">
                  <h2>Devops/ deployment management</h2>
                  <p>React,.Net, C#</p>
                </div>
                <div Name="training-track-card">
                  <h2>Internet of things (IoT)</h2>
                  <p>React,.Net, C#</p>
                </div>
                <div className="training-track-card">
                  <h2>Design thinking & agile dev</h2>
                  <p>React,.Net, C#</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default home
