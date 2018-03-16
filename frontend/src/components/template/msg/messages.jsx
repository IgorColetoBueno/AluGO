import React, { Component } from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'modules/react-redux-toastr/lib/css/react-redux-toastr.min.css';

class Messages extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <ReduxToastr 
            timeOut={4000}
             newestOnTop={true}
              preventDuplicates={true}
              position='bottom-right'
              transitionIn='fadeIn'
              transitionOut='fadeOut'
              progressBar
               />
            
         )
    }
}
export default Messages;