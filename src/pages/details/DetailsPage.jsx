import React from 'react';
import { Page } from '../../common/layout/Page';
import { Header } from '../../common/layout/Header';
import { Footer } from '../../common/layout/Footer';
import { Content } from '../../common/layout/Content';
import { MoviesList } from '../../common/widgets/MoviesList';
import { Button } from '../../common/buttons/Button';
import { FilmDetails } from './FilmDetails';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as moviesActions from '../../actions/moviesActions';
import * as movieDetailsActions from '../../actions/movieDetailsActions';

class DetailsPageView extends React.Component {
    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);

        if (params) {
            let searchBy = params.get('search_by');
            let sortBy = params.get('sort_by');
            let value = params.get('value');
            let id = params.get('id');

            if (searchBy && searchBy !== this.props.searchBy) {
                this.props.changeSearchBy(searchBy);
            }

            if (sortBy && sortBy !== this.props.sortBy) {
                this.props.changeSortBy(sortBy);
            }

            if (value && value !== this.props.value) {
                this.props.changeSearchValue(value);
                this.props.getMovies(searchBy, sortBy, value);
            }

            if (id) {
                this.props.getMovieDetails(id);
            }
        }
    }

    render() {
        return (
            <Page>
                <Header rightItems={ [<Link key="Search" to={ `/search?value=${this.props.searchValue}&search_by=${this.props.searchBy}&sort_by=${this.props.sortBy}` }><Button color="light-gray" caption="Search"/></Link>] }>
                    <FilmDetails/>
                </Header>
                <Content>
                    <MoviesList
                        movies={ this.props.movies }
                        getMovieDetails={ this.props.getMovieDetails }
                        searchValue={ this.props.searchValue }
                        searchBy={ this.props.searchBy }
                        sortBy={ this.props.sortBy }
                    />
                </Content>
                <Footer/>
            </Page>
        )
    }
}

function mapStateToProps (state) {
    return {
        movies: state.page.movies,
        searchValue: state.page.searchValue,
        searchBy: state.page.searchBy,
        sortBy: state.page.sortBy,
        totalResults: state.page.totalResults,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        changeSortBy: (sortParameter) => dispatch(moviesActions.changeSortingParameter( sortParameter )),
        changeSearchBy: (searchParameter) => dispatch(moviesActions.changeSearchParameter( searchParameter )),
        changeSearchValue: (searchValue) => dispatch(moviesActions.changeSearchValue( searchValue )),
        getMovies: (searchBy, sortBy, searchValue) => dispatch(moviesActions.getMovies( searchBy, sortBy, searchValue )),
        getMovieDetails: (movieId) => dispatch(movieDetailsActions.getMovieDetails( movieId )),
    };
}

export const DetailsPage = connect(mapStateToProps, mapDispatchToProps)(DetailsPageView);
