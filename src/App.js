import React from 'react';
const date = new Date("2021", "02", "15");
const App = () => {
  // const [currentDate, setCurrentDate] = React.useState(new Date());
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [mins, setMins] = React.useState(0);
  const [sec, setSec] = React.useState(0);
  React.useEffect(() => {
    setInterval(() => {
      const currentDate = new Date();
      const diff = date - currentDate;
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMins(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)));
      setSec(Math.floor((diff % (1000 * 60)) / 1000));
    }, 1000);
  }, []);
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            flexDirection: "column",
            height: '100vh',
            background: '#00091B',
            color: '#fff'
        }}>
            <h1 style={{
                fontSize: 70,
                margin: 0,
                textAlign: "center"
            }}>Coming Soon</h1>
            <h1>
                <a style={{
                    color: "#fff"
                }} href="https://iips.edu.in/" target={'_blank'}>IIPS</a>
                &nbsp; ACM CHAPTER</h1>

            <div className="countdown-col col">
                <div style={{
                    display: 'flex',
                    width: 300,
                    justifyContent: 'space-between'
                }}>
          <span style={{
              textAlign: "center"
          }}>
            <div id="d">{days}</div>
            Days
          </span>
          <span style={{
            textAlign: "center"
          }}>
            <div id="h">{hours}</div>
            Hours
          </span>
          <span style={{
            textAlign: "center"
          }}>
            <div id="m">{mins}</div>
            Minutes
          </span>
          <span style={{
            textAlign: "center"
          }}>
            <div id="s">{sec}</div>
            Seconds
          </span>
                </div>
            </div>
        </div>
    );
};

export default App;
