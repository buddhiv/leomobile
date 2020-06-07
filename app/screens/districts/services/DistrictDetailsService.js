const DistrictDetailsService = {
    isDistrictKeyOfficersAdded: (directory) => {
        return directory.some((directoryItem) => {
            return directoryItem.leoMembers.length > 0;
        });
    },
    formatDistrictsListForPicker: (districtsList) => {
        return districtsList.map((district) => {
            return {
                label: district.name,
                value: district.id,
            };
        });
    },
};

export default DistrictDetailsService;
