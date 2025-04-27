var React = require('react');

var CurrentQuestion = React.createClass({
    handleClick: function() {
        if (this.props.showAnswer) {
            this.props.handleClose();
        } else {
            this.props.handleClick();
        }
    },
    render: function() {
        if (!this.props.showQuestion) {
            return (<div></div>);
        }

        var statement;

        if (this.props.showAnswer) {
            statement = this.props.answer;
        } else {
            statement = this.props.question;
        }
        return (
            <div className="current-question" onClick={this.handleClick}>
                 <p dangerouslySetInnerHTML={{__html:statement}} />
                {!this.props.showAnswer && 
                <img src={this.props.imgUrl}></img>}
                 {this.props.showAnswer && 
                <img src={this.props.url2}></img>}
               </div>
        );
    }
});

module.exports = CurrentQuestion;