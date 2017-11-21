import React from 'react';
import { Page } from '../../common/layout/Page';
import { Header } from '../../common/layout/Header';
import { Footer } from '../../common/layout/Footer';
import { Content } from '../../common/layout/Content';
import { SortingPanelWithRouter } from '../../common/widgets/SortingPanel';
import { MoviesList } from '../../common/widgets/MoviesList';
import { SearchWithRouter } from './Search';
import { connect } from 'react-redux';
import * as moviesActions from '../../actions/moviesActions';
import * as movieDetailsActions from '../../actions/movieDetailsActions';

class MainPageView extends React.Component {
    componentWillMount() {
        const params = new URLSearchParams(this.props.location.search);

        if (params) {
            let searchBy = params.get('search_by');
            let sortBy = params.get('sort_by');
            let value = params.get('value');

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
        }
    }

    render() {
        return (
            <Page>
                <Header>
                    <SearchWithRouter
                        sortBy={ this.props.sortBy }
                        searchBy={ this.props.searchBy }
                        searchValue={ this.props.searchValue }
                        changeSearchBy={ this.props.changeSearchBy }
                        changeSearchValue={ this.props.changeSearchValue }
                        getMovies={ (searchValue) => this.props.getMovies(this.props.searchBy, this.props.sortBy, searchValue) }
                    />
                </Header>
                <SortingPanelWithRouter
                    sortBy={ this.props.sortBy }
                    searchBy={ this.props.searchBy }
                    searchValue={ this.props.searchValue }
                    changeSortBy={ this.props.changeSortBy }
                    getMovies={ (sortBy) => this.props.getMovies(this.props.searchBy, sortBy, this.props.searchValue) }
                />
                <Content>
                    <MoviesList
                        movies={ this.props.movies.length ? this.props.movies : null }
                        getMovieDetails={ this.props.getMovieDetails }
                        searchValue={ this.props.searchValue }
                        searchBy={ this.props.searchBy }
                        sortBy={ this.props.sortBy }
                    />
                </Content>
                <Footer/>
            </Page>
        );
    }
};

function mapStateToProps (state) {
    return {
        sortBy: state.page.sortBy,
        searchBy: state.page.searchBy,
        searchValue: state.page.searchValue,
        movies: state.page.movies,
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

export const MainPage = connect(mapStateToProps, mapDispatchToProps)(MainPageView);
