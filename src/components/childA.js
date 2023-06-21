import React from 'react';

const ChildA = (props) =>{
    let student="Vasu";

    const sendStudentFunc = (e, stu) => { // Handler
        // console.log("Hello");
        props.getStudentProp(stu);
        // console.log("e", e);
        // console.log("e.target", e.target);
        console.log("stu", stu);
    }

    return(
        <React.Fragment>
            <div className="child_a">This is Child A</div>
            {/* <button onClick={e=>props.getStudentProp(student)}>send Student</button> */}
            <button onClick={e=>sendStudentFunc(e, student)}>send Student</button>
        </React.Fragment>
    );
}

export default ChildA;