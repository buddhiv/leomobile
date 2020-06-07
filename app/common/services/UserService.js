import GlobalService from '../../lib/services/GlobalService';

const UserService = {
    getCurrentUser: () => {
        return GlobalService.get('user');
    },
    getCurrentUserPermissions: () => {
        return GlobalService.get('permissions');
    },
};

export default UserService;
