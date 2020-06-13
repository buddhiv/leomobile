import UserService from './UserService';

const PermissionsService = {
    getPermission: (permissionName) => {
        let permissions = UserService.getCurrentUserPermissions();

        let selectedPermissions = permissions.permissions.filter((permissionObj) => {
            return permissionObj.datagroup_name === permissionName;
        });

        if (selectedPermissions.length > 0) {
            return selectedPermissions[0].permissions;
        } else {
            return {};
        }
    },
};

export default PermissionsService;
