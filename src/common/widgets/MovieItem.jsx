import React from 'react';
import * as css from './MovieItem.less';

export class MovieItem extends React.Component {
    render() {
        return (
            <div className={ css.container }>
                <a href="/film"><img src={ 'https://image.tmdb.org/t/p/w185' + this.props.movie.poster_path }/></a>
                <a className={ css.title } href={ '/film?name=' + this.props.movie.title }>{ this.props.movie.title }</a>
                <div className={ css.date }>{ this.props.movie.release_date }</div>
            </div>
        );
    }
}