const PermissionsService = {
    getPermission: (permissionsArray, permissionName) => {
        let selectedPermissions = permissionsArray.filter((permissionObj) => {
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
