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
    formatRegionsListForPicker: (regionsList) => {
        return regionsList.map((region) => {
            return {
                label: region.name,
                value: region.id,
            };
        });
    },
    getZonesListForPickerFromRegionId: (regionsList, regionId) => {
        let selectedRegion = regionsList.find((region) => {
            return region.id === regionId;
        });

        return selectedRegion.leoZones.map((region) => {
            return {
                label: region.name,
                value: region.id,
            };
        });
    },
};

export default DistrictDetailsService;
