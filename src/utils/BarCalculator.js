import App from "../App";
export const BarCalculate = (inputValues) => {
    const {
        glass,
        metals,
        plastics,
        otherOrganics,
        foodScraps,
        paperCardboard,
        other,
        textiles,
        yardTrimmings,
        wood,
        mswRecycled,
    } = inputValues;

    let totalUserMSWasteGenerated = glass + metals + plastics + otherOrganics + foodScraps + paperCardboard + other + textiles + yardTrimmings + wood;
    
    return {
        results: {
            user_msw_recyclingRate: (mswRecycled / totalUserMSWasteGenerated) * 100, //recycling rate equation from the EPA
            nat_recyclingRate2017: .352*100 , //Source: City of Phila./EPA. The national recycling rate in 2017 for the U.S.
            phl_recyclingRate2018: .416 * 100, //Source: City of Philadelphia. 41.6% (higher than the nat. avg. in 2017). This doesn't include recycled C&D debris.
            Target_national_recyclingRate2030: .5 * 100, //Source: EPA. They want the nat. rate to be at 50% by 2030.
        },
    };

};