const ClubDetailsService = {
    getDistrictName: (club) => {
        return club.leoDistrictZone.leoDistrictRegion.leoDistrict.name;
    },
    getZoneName: (club) => {
        return club.leoDistrictZone.name;
    },
    getLionsClubName: (club) => {
        return club.parentLionsClub.name;
    },
    isClubKeyOfficersAdded: (directory) => {
        return directory.some((directoryItem) => {
            return directoryItem.leoMembers.length > 0;
        });
    },
};

export default ClubDetailsService;
