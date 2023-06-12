function Students(){

    const studentsList = [
        {id:1, name: "Vaasu", mobile: "0987654321", city: "Venkatagiri"},
        {id:2, name: "Sai", mobile: "9876543210", city: "Tanguturu"},
        {id:3, name: "Shravani", mobile: "9988776655", city: "Thirupati"},
        {id:4, name: "Aneel", mobile: "0987654321", city: "Hyderabad"}
    ];

    const menu = [
        {id:1, menuItem: "Home", isChild: false},
        {id:2, menuItem: "About", isChild: true, childMenu:[
            {id:1, menuItem: "Management", isChild: false},
            {id:2, menuItem: "Employees", isChild: false}
        ]},
        {id:3, menuItem: "Services", isChild: true, childMenu:[
            {id:1, menuItem: "Softwate Services", isChild: false},
            {id:2, menuItem: "Digital Marketing", isChild: false},
            {id:2, menuItem: "Web Hosting Services", isChild: false}
        ]},
        {id:4, menuItem: "FAQ", isChild: false},
        {id:5, menuItem: "Contact", isChild: false},
    ]

    return(
        <table style={{border:"1px solid #ccc", width: "400px", margin: "50px auto", textAlign: "center"}}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Mobile</th>
                    <th>City</th>
                </tr>
            </thead>
            <tbody>
                {
                    studentsList.map(list => <tr key={list.id}>
                        <td>{list.name}</td>
                        <td>{list.mobile}</td>
                        <td>{list.city}</td>
                    </tr>)
                }

                {/* <tr>
                    <td>Vaasu</td>
                    <td>0987654321</td>
                    <td>Venkatagiri</td>
                </tr>
                <tr>
                    <td>Sai</td>
                    <td>9876543210</td>
                    <td>Tanguturu</td>
                </tr>
                <tr>
                    <td>Shravani</td>
                    <td>9988776655</td>
                    <td>Thirupati</td>
                </tr> */}
            </tbody>
        </table>
    );
}
export default Students;

        // <ul>
        //     <li>Vasu</li>
        //     <li>Sai</li>
        //     <li>Shravani</li>

        //     {
        //         studentsList.map(function(list){
        //             return <li>{list.name}</li>
        //         })
        //     }
        //     {
        //         studentsList.map(function(list){
        //             return <li>{list.mobile}</li>
        //         })
        //     }
        //     {
        //         studentsList.map(list => <li>{list.city}</li>)
        //     }

        // </ul>