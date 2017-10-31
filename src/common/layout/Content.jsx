import React from 'react';
import * as css from './Content.less';

export const Content = (props) => <div className={ css.contentContainer }>{ props.children }</div>;