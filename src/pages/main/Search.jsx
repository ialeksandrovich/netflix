import React from 'react';
import * as css from './Search.less';
import { withRouter } from 'react-router'
import { Button } from '../../common/buttons/Button';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: this.props.searchValue || ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push(`/search?search=${this.state.searchValue}`);
    }

    render() {
        return (
            <div>
                <div className={ css.title }>Find your movie</div>
                <form onSubmit={ this.handleSubmit }>
                    <input className={ css.search } type="text" value={ this.state.searchValue } onChange={ this.handleChange }/>
                    <div className={ css.bottomPanel }>
                        <div className={ css.filterContainer }>
                            <div>Search by</div>
                            <Button size="small" color="red" caption="Title"/>
                            <Button size="small" color="dark-gray" caption="Director"/>
                        </div>
                        <Button color="red" caption="Search" onClick={ this.handleSubmit }/>
                    </div>
                </form>
            </div>
        )
    }
}

export const SearchWithRouter = withRouter(Search);