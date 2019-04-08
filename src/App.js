import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });

  }

  render() {

    var { isLoaded, items } =this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    }

    else {

      return (
        <div className="App">

          <ul>
            {items.map(item => (
              <li key={item.txt}>
                <p>Валюта {item.cc} ({item.txt}) <span> Курс к гривне: {item.rate} </span> </p>
              </li>
            ))}
          </ul>

        </div>
      );

    }
  }
}

export default App;
