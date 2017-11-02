import React from 'react';
import { Page } from '../../common/layout/Page';
import { Header } from '../../common/layout/Header';
import { Footer } from '../../common/layout/Footer';
import { Content } from '../../common/layout/Content';
import { MoviesList } from '../../common/widgets/MoviesList';
import { Button } from '../../common/buttons/Button';
import { movies } from '../../Data';
import { FilmDetails } from './FilmDetails';
import { Link } from 'react-router-dom';

export const DetailsPage = () => {
    return (
        <Page>
            <Header rightItems={ [<Link key="Search" to="/"><Button color="light-gray" caption="Search"/></Link>] }>
                <FilmDetails/>
            </Header>
            <Content>
                <MoviesList movies={ movies }/>
            </Content>
            <Footer/>
        </Page>
    )
}
