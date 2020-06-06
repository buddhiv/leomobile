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
    getMultipleDistrictId: (member) => {
        return member.leoClub.leoDistrictZone.leoDistrictRegion.leoDistrict.leoMultipleId;
    },
    getDistrictId: (member) => {
        return member.leoClub.leoDistrictZone.leoDistrictRegion.leoDistrictId;
    },
};

export default MemberDetailsService;
