const MemberDetailsService = {
    getFirstName: (member) => {
        return member.firstName;
    },
    getFullName: (member) => {
        return member.firstName + ' ' + member.lastName;
    },
    getClubName: (member) => {
        return 'Leo Club of University of Moratuwa';
    },
};

export default MemberDetailsService;
