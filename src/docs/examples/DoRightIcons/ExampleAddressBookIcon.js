import React from 'react';
import DoRightIcons from 'ps-react/DoRightIcons';

/** Select an icon to display */
class ExampleIcons extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'facebook',
            width: '25',
            height: '25',
        };
    }

    render() {
        return (
            <div>
                <input type='text' onChange={event => this.setState({width: event.target.value, height: event.target.value})} value={this.state.width}/>
                <select onChange={event => this.setState({selectedValue: event.target.value})}>
                    <option value="facebook">facebook</option>
                    <option value="eye">eye</option>
                    <option value="home">home</option>
                </select>
                <p>{this.state.selectedValue}</p>
                <DoRightIcons iconName={this.state.selectedValue} width={this.state.width} height={this.state.height} color='red'/>
            </div>
        );
    }
}

/** Selected Icon */
export default ExampleIcons;