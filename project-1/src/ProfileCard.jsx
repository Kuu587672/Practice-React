function ProfileCard(props) {
    function handleFollow() {
        alert(`You followed ${props.name}!`);
    }
    return (
        <div style={cardStyle}>
            <img
                src={props.image}
                alt="Profile Image"
                style={{ 
                    width: "200px", 
                    height: "200px", 
                    borderRadius: "5px", 
                    objectFit: "cover" 
                }}
            />
            <h2>{props.name}</h2>
            <p>{props.role}</p>
            <button onClick={handleFollow}>Follow</button>
        </div>
    );
}

const cardStyle = {
    border: "2px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "200px",
    textAlign: "center",
    margin: "20px auto",
    backgroundColor: "#f8f9fa"
};

export default ProfileCard;