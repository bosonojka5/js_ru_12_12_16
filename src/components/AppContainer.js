import React, { PropTypes } from 'react'
import ArticleList from './ArticleList'
import DateTimePicker from './DateTimePicker/DateTimePicker'
import Filter from './Filter'

function AppContainer(props) {
    return (
        <div>
            <DateTimePicker />
            <Filter articles = {props.articles}/>
            <ArticleList articles={props.articles}/>
        </div>
    )
}

AppContainer.propTypes = {
}

export default AppContainer