const UserProfileOne = (props) => {
    return (
        <>
           <UserProfileTwo user={user}/>
        </>
    );
};

const UserProfileTwo = (props) => {
    return (
        <>
            <UserProfileThree user={user}/>
        </>
    );
};

const UserProfileThree = (user) => {
    return (
        <>
            <h1>User Profile</h1>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
        </>
    );
};


const UserProfile = () => {
    const user = { name: 'Justine A.', email:'justinejynnepatrice@gmail.com' }
    return (
        <>
            <UserProfileOne user={user} />
        </>
    );
};

export default UserProfile;