'use strict';
import {connect} from 'react-redux';
import React, {Component} from 'react';

class BookDetail extends Component {
    render() {
        if(!this.props.book) {
            return <div>Please select a book</div>;
        }
        return (
            <div>
                <h3>Details:</h3>
                <div>
                    {this.props.book.title}
                </div>
                <h3>Pages:</h3>
                <div>
                    {this.props.book.pages}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);