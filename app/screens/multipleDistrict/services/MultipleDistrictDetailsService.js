const MultipleDistrictDetailsService = {
    isMultipleDistrictKeyOfficersAdded: (directory) => {
        return directory.some((directoryItem) => {
            return directoryItem.leoMembers.length > 0;
        });
    },
};

export default MultipleDistrictDetailsService;
