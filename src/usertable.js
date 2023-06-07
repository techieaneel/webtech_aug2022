export default function Usertable(props) {
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>City</th>
            </tr>
            {/* <tr>
                    <td>Sai</td>
                    <td>9876543210</td>
                    <td>Ongole</td>
                </tr> */}
            <tr>
                <td>{props.userText.name}</td>
                <td>{props.userText.mobile}</td>
                <td>{props.userText.city}</td>
            </tr>
        </table>
    );
}