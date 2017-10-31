import React from 'react';
import * as css from './FilmDetails.less';
import { movie } from '../../Data';

export const FilmDetails = () => {
    return (
        <div className={ css.container }>
            <img className={ css.poster } src={ 'https://image.tmdb.org/t/p/w300' + movie.poster_path }/>
            <div className={ css.movieInfoContainer } >
                <div className={ css.title }>{ movie.title }</div>
                <div>{ movie.belongs_to_collection && movie.belongs_to_collection }</div>
                <div className={ css.dateAndTime }>
                    <div className={ css.date }>{ movie.release_date.slice(0, 4) }</div>
                    <div>{ movie.runtime } min</div>
                </div>
                <div>{ movie.overview }</div>
                <div className={ css.status }>{ movie.status }</div>
            </div>
        </div>
    );
}