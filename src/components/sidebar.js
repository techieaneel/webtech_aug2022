function Sidebar(){

    const menu = [
        {id:1, menuItem: "Home", isChild: false},
        {id:2, menuItem: "About", isChild: true, childMenu:[
            {id:1, menuItem: "Management", isChild: false},
            {id:2, menuItem: "Employees", isChild: false}
        ]},
        {id:3, menuItem: "Services", isChild: true, childMenu:[
            {id:1, menuItem: "Softwate Services", isChild: false},
            {id:2, menuItem: "Digital Marketing", isChild: false},
            {id:3, menuItem: "Web Hosting Services", isChild: false}
        ]},
        {id:4, menuItem: "FAQ", isChild: false},
        {id:5, menuItem: "Contact", isChild: false},
    ];

    return(
        <div className="sidebar">
            <h3>Sidebar</h3>
            <ul>
                {
                    menu.map(item => <li key={item.id}>
                        {item.menuItem}
                        <ul>
                            {/* {item.isChild === true ? item.childMenu.map(innerItem => <li key={innerItem.id}>{innerItem.menuItem}</li>) : ""} */}
                            {item.isChild && item.childMenu.map(innerItem => <li key={innerItem.id}>{innerItem.menuItem}</li>)}
                        </ul>
                    </li>)
                }
            </ul>
        </div>
    );
}
export default Sidebar;

/*

if(isChild === true){
    console.log("Show it");
} else{
    console.log("Hide it");
}

// Ternary Operator

isChild === true ? console.log("Show it") : console.log("Hide it");

//Truty Values and Falsy Values
isChild ? console.log("Show it") : console.log("Hide it");

if(isChild === true){
    console.log("Show it");
}
isChild === true && console.log("Show it");
isChild && console.log("Show it");

*/