import React from 'react';
import { Page } from '../../common/layout/Page';
import { Header } from '../../common/layout/Header';
import { Footer } from '../../common/layout/Footer';
import { Content } from '../../common/layout/Content';
import { MoviesList } from '../../common/widgets/MoviesList';
import { SearchWithRouter } from './Search';
import { movies } from '../../Data';

export const MainPage = (props) => {
    const params = new URLSearchParams(props.location.search);

    return (
        <Page>
            <Header>
                <SearchWithRouter searchValue={ params.get('search') }/>
            </Header>
            <Content>
                <MoviesList movies={ params.get('search') ? movies : null }/>
            </Content>
            <Footer/>
        </Page>
    );
};
