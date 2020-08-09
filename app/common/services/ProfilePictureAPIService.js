import WebService from '../../lib/webservice/WebService';

const ProfilePictureAPIService = {
    getProfilePicture: (entityId, entityType) => {
        return WebService.call('/api/v1/profilePicture/' + entityId + '?entity=' + entityType, 'GET');
    },
};

export default ProfilePictureAPIService;
