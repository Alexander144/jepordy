var React = require('react');
var $ = require('jquery');

var CurrentQuestion = require('./CurrentQuestion.jsx');
var Category = require('./Category.jsx');
var questions = require('./questions1.jsx')

var getQueryVariable = function (variable) {
    var query = window.location.search.substring(1);
    var params = query.split("&").reduce( function(parameters, value) {
        var param = value.split("=");
        parameters[param[0]] = param[1];
        return parameters;
    }, {});

    return params[variable];
};

var Main = React.createClass({
    getInitialState: function() {
        return {
            categories: [],
            currentQuestion: "",
            currentAnswer: "",
            showQuestion: false,
            showAnswer: false,
            url: undefined,
            url2: undefined
        }
    },
    componentDidMount: function() {

                this.setState({
                    categories: questions
                });
          
    },
    showQuestion: function(categoryIndex, questionIndex, question, answer, imgUrl, url2) {
        var categories = this.state.categories;
        categories[categoryIndex].questions[questionIndex].answered = true;
        this.setState({
            categories: categories,
            currentQuestion: question,
            currentAnswer: answer,
            showQuestion: true,
            url: imgUrl,
            url2:url2
        })
    },
    closeQuestion: function() {
        this.setState({
            showQuestion: false,
            showAnswer: false,
            url: undefined
        })
    },
    showAnswer: function() {
        this.setState({
            showAnswer: true
        });
    },
    getCategories: function() {
        var showQuestion = this.showQuestion;
        var categories = this.state.categories.map( function(category, i) {
            return (
                <Category
                    key={i}
                    categoryIndex={i}
                    categoryName={category.name}
                    questions={category.questions}
                    handleClick={showQuestion}
                />
            )
        });

        return categories;
    },
    render: function() {
        return (
            <div>
                <CurrentQuestion
                    question={this.state.currentQuestion}
                    answer={this.state.currentAnswer}
                    showQuestion={this.state.showQuestion}
                    showAnswer={this.state.showAnswer}
                    handleClick={this.showAnswer}
                    handleClose={this.closeQuestion}
                    imgUrl={this.state.url}
                    url2={this.state.url2}
                />
                <div className="board">{this.getCategories()}</div>
            </div>
        );
    }
});

var questionSet = (getQueryVariable("questions") ? getQueryVariable("questions") : 'questions1');

var questionUrl = '/' + questionSet + '.json';

React.render(<Main questionSetUrl={questionUrl}/>, document.getElementById('main'));
