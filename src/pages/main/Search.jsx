import React from 'react';
import * as css from './Search.less';
import { withRouter } from 'react-router';
import { Button } from '../../common/buttons/Button';

export class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: this.props.searchValue
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchValue !== this.props.searchValue) {
            this.setState({
                searchValue: nextProps.searchValue
            });
        }
    }

    handleChange(e) {
        this.setState({
            searchValue: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeSearchValue(this.state.searchValue);
        this.props.getMovies(this.state.searchValue);
        if (!this.state.searchValue) {
            this.props.history.push(`/search`);
        } else {
            this.props.history.push(`/search?value=${this.state.searchValue}&search_by=${this.props.searchBy}&sort_by=${this.props.sortBy}`);
        }
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
                            <Button
                                size="small"
                                color="dark-gray"
                                caption="Title"
                                active={ this.props.searchBy === 'title' }
                                onClick={ () => this.props.changeSearchBy('title') }
                            />
                            <Button
                                size="small"
                                color="dark-gray"
                                caption="Director"
                                active={ this.props.searchBy === 'director' }
                                onClick={ () => this.props.changeSearchBy('director') }
                            />
                        </div>
                        <Button color="red" caption="Search" onClick={ this.handleSubmit }/>
                    </div>
                </form>
            </div>
        )
    }
}

export const SearchWithRouter = withRouter(Search);