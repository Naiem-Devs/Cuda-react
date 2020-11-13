import React, { Component } from 'react'
import PortData from './PortData'
import ItemList from './ItemList'
import SecTitle from '../component/SecTitle'
import FilterBtn from './FilterBtn'
import './PortFolio.css'

export class Portfolio extends Component {

    state = {
        products: null,
        showData: null,
    }

    componentDidMount() {
        this.setState({products: PortData})
        this.setState({showData: PortData})
    }

    filterBtns = (e) => {
        let cat = e.target.value
        if(cat !== 'All'){
            let newList =  ()=> {
                
                let list = this.state.products.filter((item)=> {
     
                    if(cat === item.category){
                        return item
                    }
                })
                return list
            }
            console.log(newList());
            this.setState({showData: newList()});
        }else{
            this.setState({showData: PortData});
        }
    }

    render() {
        return (
            <div>
                <div className="protfolio_section p_100">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-3">
                                <SecTitle 
                                    Sectitle='OUR PORTFOLIO'
                                    SecPera='Neque porro quisquam est, qui dolorem ipsum quia dolor sit ametconsectetur, adipisci velit, sed quia non numquam'
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mb-5">
                                <FilterBtn filterBtn={this.filterBtns} />
                            </div>
                        </div>
                        <div className="row">
                            <ItemList products={this.state.showData}  />
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="port_btn">
                                    <a href="http://google.com" className='thm-btn'>LOAD MORE PROJECTS</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="protiche">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Portfolio
