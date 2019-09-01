import React, {useState, useEffect} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const TopRow = () => {
  const [home, setHome] = useState(6);
  const [away, setAway] = useState(18);
  let [minute, setMinute] = useState(14);
  let [second, setSecond] = useState(60);

  const onClick = (e) => {
    if (e.target.classList.contains('homeButtons__touchdown')) {
      setHome(home + 7);
    } else if (e.target.classList.contains('homeButtons__fieldGoal')) {
      setHome(home + 3)
    } else if (e.target.classList.contains('awayButtons__touchdown')) {
      setAway(away + 7);
    } else if (e.target.classList.contains('awayButtons__fieldGoal')) {
      setAway(away + 3)
    }
  }

  useEffect(() => {
    setInterval(() => {
      if (second === 0) {
        setMinute(minute -= 1)
        setSecond(second = 60)
      } else {
        setSecond(second -= 1)
      }
    }, 1000)
  }, [second])

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            <div className="home__score">{home}</div>
          </div>
          <div className="timer">
            {(minute < 10 ? '0' : '') + minute}:{(second < 10 ? '0' : '') + second}
          </div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{away}</div>
          </div>
        </div>
        <BottomRow home={home} away={away}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          <button onClick={onClick} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={onClick} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={onClick} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={onClick} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  )
}

export default TopRow;