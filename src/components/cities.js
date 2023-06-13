const Cities = () => {
    return(
        <div className="cities">
            <select onChange={e => console.log("Selected on is: ", e.target.value)}>
                <option value="tirupati">Tirupati</option>
                <option value="nellore">Nellore</option>
                <option value="ongole">Ongole</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="tirupati">Thirupati</option>
            </select>
        </div>
    );
}
export default Cities;