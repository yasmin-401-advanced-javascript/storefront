import React from 'react';
import {connect} from 'react-redux';
import {active} from '../../store/reducers/products';
import './categories.scss'
function Categories (props){
    return (
        <section>
            <h3> Browes Our Categories</h3>
            <ul>
                {
                    props.categories.categories.map(category =>{
                        return (
                            <li className = {category.name} key = {category.name} onClick={()=> props.active(category.name)}>
                                {category.displayName}
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
const mapStateToProps = (state) =>{
    return {categories : state.Categories}
} 
const mapDispatchToProps = { active } 
export default connect(mapStateToProps ,mapDispatchToProps )(Categories);