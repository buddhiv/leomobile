const MemberDetailsService = {
    getFirstName: (member) => {
        return member.firstName;
    },
    getFullName: (member) => {
        return member.firstName + ' ' + member.lastName;
    },
    getClubName: (member) => {
        return member.leoClub.name;
    },
    getClubId: (member) => {
        return member.leoClubId;
    },
};

export default MemberDetailsService;
