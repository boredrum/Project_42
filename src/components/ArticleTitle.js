import React, {Component} from "react";
import LangContext from "./lang-context";

class ArticleTitle extends Component{
    render(){
    //console.log(this.props);
        return (
            <LangContext.Consumer>
                {
                    (context) => {
                    return (
                        <div className="article__title">
                        <h2 className="article__title">
                            {context.articleTitle}
                        </h2>
                        </div>
                    )
                    }
                }
            </LangContext.Consumer>
        )
    }
}

export default ArticleTitle;