import React from 'react';
import css from './MovieItem.less';
import { withRouter } from 'react-router';
import { SMALL_IMAGE_BASE_URL } from '../../api/api';

export class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.getMovieDetails = this.getMovieDetails.bind(this);
    }

    getMovieDetails(e) {
        e.preventDefault();
        this.props.getMovieDetails(this.props.movie.id);
        this.props.history.push(`/film?id=${this.props.movie.id}&value=${this.props.searchValue}&search_by=${this.props.searchBy}&sort_by=${this.props.sortBy}`);
        // window.scrollTo(0,0);
    }

    render() {
        return (
            <div className={ css.container }>
                <a onClick={ this.getMovieDetails } className={ css.poster }>
                    <img src={ SMALL_IMAGE_BASE_URL + this.props.movie.poster_path } sizes="185px"/>
                </a>
                <div className={ css.titleAndVote }>
                    <a onClick={ this.getMovieDetails } className={ css.title }>{ this.props.movie.title }</a>
                    <div className={ css.vote }>{ this.props.movie.vote_average }</div>
                </div>
                <div className={ css.date }>{ this.props.movie.release_date }</div>

            </div>
        );
    }
}

export default withRouter(MovieItem);