const ClubDetailsService = {
    getDistrictName: (club) => {
        return club.leoDistrictZone.leoDistrictRegion.leoDistrict.name;
    },
    getZoneName: (club) => {
        return club.leoDistrictZone.name;
    }
};

export default ClubDetailsService;
