import React from 'react';

class SearchBar extends React.Component {
    state = { term: "" }

    onInputChange = (e) => {
        this.setState({ term: e.target.value });
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        //call the parent component method callback.
        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="searchBar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <h3 style={{textAlign: "center"}}>Video Search</h3>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;