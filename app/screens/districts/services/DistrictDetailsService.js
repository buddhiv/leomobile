const DistrictDetailsService = {
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
