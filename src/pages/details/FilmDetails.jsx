import React from 'react';
import * as css from './FilmDetails.less';
import { connect } from 'react-redux';
import { BIG_IMAGE_BASE_URL } from '../../api/api';

export const FilmDetailsView = (props) => {
    return (
        <div>
            {
                props.movieDetails &&
                <div className={ css.container }>
                    <img className={ css.poster } src={ BIG_IMAGE_BASE_URL + props.movieDetails.poster_path }/>
                    <div className={ css.movieInfoContainer } >
                        <div className={ css.title }>{ props.movieDetails.title }</div>
                        <div>{ props.movieDetails.belongs_to_collection && props.movieDetails.belongs_to_collection.name }</div>
                        <div className={ css.dateAndTime }>
                            <div className={ css.date }>{ props.movieDetails.release_date.slice(0, 4) }</div>
                            <div>{ props.movieDetails.runtime } min</div>
                        </div>
                        <div>{ props.movieDetails.overview }</div>
                        <div className={ css.status }>{ props.movieDetails.status }</div>
                    </div>
                </div>
            }
        </div>
    );
}

function mapStateToProps (state) {
    return {
        movieDetails: state.movie.movieDetails
    };
}

export const FilmDetails = connect(mapStateToProps)(FilmDetailsView);