import React from 'react';
import * as css from './MoviesList.less';
import { MovieItemWithRouter } from "./MovieItem";

export const MoviesList = (props) => {
    return (
        <div className={ props.movies ? css.container : css.emptyContainer }>
            {
                props.movies ?
                    props.movies.map((movie) =>
                        <MovieItemWithRouter
                            key={ movie.id }
                            movie={ movie }
                            getMovieDetails={ props.getMovieDetails }
                            searchValue={ props.searchValue }
                            searchBy={ props.searchBy }
                            sortBy={ props.sortBy }
                        />) :
                    'No films found'
            }
        </div>
    );
}