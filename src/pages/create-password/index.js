import React from 'react';
import CreatePassword from 'components/create-password';
// import http from 'interfaces/http';

const CreatePasswordPage = (props) => {
    return (
        <CreatePassword param={props.match.params.id}/>
    )
}
export default CreatePasswordPage;

