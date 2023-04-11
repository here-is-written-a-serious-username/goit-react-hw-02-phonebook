import React, { Component } from 'react';


class Filter extends Component {
    state = {
        filter: '',
    }

    handleChange = evt => {
        const { name, value } = evt.target;
        this.setState({ [name]: value });
    };

    render() {
        const { handleChange, filter } = this.props;
        // const { filter } = this.state;
        return (
            <label >
                <input
                    type="text"
                    name="filter"
                    onChange={handleChange}
                    value={filter}
                />
            </label>
        )
    }
}


export default Filter;