import React, {Component} from 'react';


class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            value:'metric'
        }
    }
    
    render(){
        return(
            
            <div className='row'>
                <form className='col-s12' onSubmit={this.props.getWeather}>
                    <div className='row'>
                        <div className='input-field  col s6'>
                            <input type='text' autoComplete='none' className='white-text' placeholder='City'name='city'/>
                        </div>
                        <div className='input-field col s6'>
                            <input type='text'  autoComplete='none' className='white-text' id='country' placeholder='Country'  name='country'/>
                           
                        </div>
                        <input type='text' hidden defaultValue={this.state.value} name='unit' />
                    </div>
                    <div className='row'>
                    <div className="input-field ">
                        <button className='col s6 indigo accent-4 waves-effect waves-light btn-large'>
                            <i className="material-icons right">cloud</i>Find Weather
                        </button>
                    </div>
                    
                    </div>
                    
                </form>
            </div>
        );
    }
    
}
export default Form;