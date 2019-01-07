import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  renderUser = user => <li>{user.username}</li>

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map(this.renderUser)}
        </ul>
        <p>Count: {this.props.userCount}</p>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {users: state.users, userCount: state.users.length}
}

export default connect(mapStateToProps)(Users)
