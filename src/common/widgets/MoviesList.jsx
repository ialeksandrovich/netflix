import React from 'react';
import * as css from './MoviesList.less';
import { MovieItem } from "./MovieItem";

export const MoviesList = (props) => {
    return (
        <div className={ props.movies ? css.container : css.emptyContainer }>
            {
                props.movies ?
                    props.movies.results.map((movie) => <MovieItem key={ movie.id } movie={ movie }/>) :
                    'No films found'
            }
        </div>
    );
}