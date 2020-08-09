import ProfilePictureAPIService from './ProfilePictureAPIService';

const ProfilePictureService = {
    getProfilePictureByEmployeeId: (employeeId) => {
        return ProfilePictureAPIService.getProfilePicture(employeeId, 'leoMember');
    },
    getProfilePictureByClubId: (clubId) => {
        return ProfilePictureAPIService.getProfilePicture(clubId, 'leoClub');
    },
    getProfilePictureByDistrictId: (districtId) => {
        return ProfilePictureAPIService.getProfilePicture(districtId, 'leoDistrict');
    },
};

export default ProfilePictureService;
