import ChildC from "./childC";

const ChildB = ({studentProp}) =>{
    return(
        <>
            <div className="child_b">This is Child B</div>
            {/* <div className="student">Student is : {studentProp} </div> */}
            <ChildC studentProp={studentProp}/>
        </>
    );
}

export default ChildB;

// <></> OR <React.Fragment></React.Fragment>
// Props Drilling
// to avoid Prop Drilling we use useContext Hook OR contextAPI