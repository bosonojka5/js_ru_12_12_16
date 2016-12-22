//decorator === HOC(Higher Order Component)
import React from 'react'

export default function accordion(Component) {
    return class WrapperComponent extends React.Component {
        state = {
            openArticleId: null
        }
        render() {
            return <Component {...this.props} {...this.state} toggleOpenArticle = {this.toggleOpenArticle} articleIsOpen = {this.articleIsOpen}/>
        }

        toggleOpenArticle = id => ev => {
            this.setState({
                openArticleId: id
            })
        }

        articleIsOpen = (ev) => {
            return this.state.openArticleId
        }
    }
}