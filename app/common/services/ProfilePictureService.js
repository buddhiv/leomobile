import ProfilePictureAPIService from './ProfilePictureAPIService';

const ProfilePictureService = {
    getProfilePictureByEmployeeId: (employeeId) => {
        return ProfilePictureAPIService.getProfilePicture(employeeId, 'leoMember');
    },
};

export default ProfilePictureService;
