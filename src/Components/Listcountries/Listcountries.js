import React from 'react';
import './Listcountries.css';
import Countries from '../Countries/Countries';

class Listcountries extends React.Component {
    render() {
        return (
          <div className="Listcountries">
                {
                    this.props.recordCountries.map((countries) => {
                         return <Countries countries={countries} />;   
                    })
                }
        </div>
        )
    }
}

export default Listcountries;