import React from "react";
import './App.css';
import CardList from "./components/CardList/CardList"
import SearchField from "./components/SearchField/SearchField"

class App extends React.Component {
    constructor() {
        super();

        this.state = { 
            monsters: [],
            searchValue: ""
        };
    }

    loadData() {
        let url = "https://jsonplaceholder.typicode.com/users";
        fetch(url, {
            crossDomain: true,
            method: 'GET',
            headers: {'Content-Type':'application/json'},
          })
            .then(response => response.json())
            .then(responseJson => {
                //console.log(responseJson);
                this.setState({monsters: responseJson});
              // ...
            }
          );
    }

    componentDidMount() {
        this.loadData();
    }

    handleChange = e => {
        this.setState({searchValue: e.target.value})
    }

    render() {
        const {monsters, searchValue} = this.state;

        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchValue));

        return (
            <div className="App">
                <h1>monsters</h1>
                <SearchField 
                    placeholder="search monsters..." 
                    style={{margin: "20px"}} 
                    value={searchValue} 
                    onChange={this.handleChange} 
                    />

                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
