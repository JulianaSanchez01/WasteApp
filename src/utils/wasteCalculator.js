// src/utils/wasteCalculator.js
export const calculateWaste = (inputValues) => {
    const { glass, metals, plastics, otherOrganics, foodScraps, paperCardboard, other, textiles, yardTrimmings, wood } = inputValues;

    let totalUserMSWasteGenerated = glass + metals + plastics + otherOrganics + foodScraps + paperCardboard + other + textiles + yardTrimmings + wood;
    
    // Calculate proportions and recycling rate as before
    return {
        totalWaste: totalUserMSWasteGenerated,
        proportions: {
            glass: (glass / totalUserMSWasteGenerated) * 100,
            metals: (metals / totalUserMSWasteGenerated) * 100,
            plastics: (plastics / totalUserMSWasteGenerated) * 100,
            otherOrganics: (otherOrganics / totalUserMSWasteGenerated) * 100,
            foodScraps: (foodScraps / totalUserMSWasteGenerated) * 100,
            paperCardboard: (paperCardboard / totalUserMSWasteGenerated) * 100,
            other: (other / totalUserMSWasteGenerated) * 100,
            textiles: (textiles / totalUserMSWasteGenerated) * 100,
            yardTrimmings: (yardTrimmings / totalUserMSWasteGenerated) * 100,
            wood: (wood / totalUserMSWasteGenerated) * 100,
        },
    };
};
