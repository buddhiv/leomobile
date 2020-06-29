const MemberDetailsService = {
    getFirstName: (member) => {
        console.log('first');
        console.log(member);
        return member.firstName;
    },
    getFullName: (member) => {
        console.log('full');
        console.log(member);
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
    getDistrictName: (member) => {
        return member.leoClub.leoDistrictZone.leoDistrictRegion.leoDistrict.name;
    },
    formatDesignationsList: (designationsList, member) => {
        let designationDescriptions = [];

        designationsList.multiplePositions.forEach((position) => {
            designationDescriptions.push(position);
        });
        designationsList.districtPositions.forEach((position) => {
            designationDescriptions.push(position + ' of ' + MemberDetailsService.getDistrictName(member));
        });
        designationsList.clubPositions.forEach((position) => {
            designationDescriptions.push(position + ' of ' + MemberDetailsService.getClubName(member));
        });

        return designationDescriptions;
    },
    getGenderValues: () => {
        return [{
            value: 'Male',
            label: 'Male',
        }, {
            value: 'Female',
            label: 'Female',
        }];
    },
};

export default MemberDetailsService;
