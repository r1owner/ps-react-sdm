import React from 'react';
import DoRightIcons from 'ps-react/DoRightIcons';

/** Dynamically Display Icon */
class ExampleIcons extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            selectedValue: 'facebook',
            selectedColor: 'black',
            width: '25',
            height: '25',
        };
    }

    render() {
        return (
            <div>
                <label>Height and width</label>
                <input type='text' onChange={event => this.setState({width: event.target.value, height: event.target.value})} value={this.state.width}/>
                <label>Icon to display</label>
                <select onChange={event => this.setState({selectedValue: event.target.value})}>
                    <option value="facebook">facebook</option>
                    <option value="eye">eye</option>
                    <option value="home">home</option>
                </select>
                <label>Color</label>
                <select onChange={event => this.setState({selectedColor: event.target.value})}>
                    <option value="black">Black</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="blue">Blue</option>
                </select>
                <p>{this.state.selectedValue}</p>
                <DoRightIcons iconName={this.state.selectedValue} width={this.state.width} height={this.state.height} color={this.state.selectedColor}/>
            </div>
        );
    }
}

/** Selected Icon */
export default ExampleIcons;