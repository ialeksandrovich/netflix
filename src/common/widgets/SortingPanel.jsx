import React from 'react';
import css from './SortingPanel.less';
import { Button } from '../buttons/Button';
import { withRouter } from 'react-router';

export class SortingPanel extends React.Component {
    handleChangeSearchBy(sortBy) {
        this.props.changeSortBy(sortBy);
        if (this.props.searchValue) {
            this.props.history.push(`/search?value=${this.props.searchValue}&search_by=${this.props.searchBy}&sort_by=${sortBy}`);
        }
    }

    render() {
        return (
            <div className={ css.container }>
                <div className={ css.label }>Sort by:</div>
                <Button
                    size="big"
                    color="dark-gray"
                    style="inline"
                    caption="release date"
                    active={ this.props.sortBy === 'reeleaseDate' }
                    onClick={ () => this.handleChangeSearchBy('reeleaseDate') }
                />
                <Button
                    size="big"
                    color="dark-gray"
                    caption="rating"
                    style="inline"
                    active={ this.props.sortBy === 'rating' }
                    onClick={ () => this.handleChangeSearchBy('rating') }
                />
            </div>
        );
    }
}

export const SortingPanelWithRouter = withRouter(SortingPanel);