import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => ({
  session: state.session
})

export default connect(mapStateToProps)(function Home(props) {
  return (
    <div>
      <h1>Home</h1>
      <hr/>
      <h2 className="text-center">
        {props.session.signedIn ? `Hi ${props.session.userDetails && props.session.userDetails.name || props.session.user.email}` : 'Hello'}
      </h2>
    </div>
  )
})