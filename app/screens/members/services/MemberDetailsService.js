const MemberDetailsService = {
    getFullName: (member) => {
        return member.firstName + ' ' + member.lastName;
    },
};

export default MemberDetailsService;
