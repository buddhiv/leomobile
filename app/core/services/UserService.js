const UserService = {
    getUserName: (user) => {
        return user.firstName + ' ' + user.lastName;
    },
};

export default UserService;
