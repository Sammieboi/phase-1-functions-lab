

function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks - 42);
}

function distanceFromHqInFeet(blocks) {

    const blocksToFeetConversion = 264;
    return distanceFromHqInBlocks(blocks) * blocksToFeetConversion;
}

function distanceTravelledInFeet(startBlock, endBlock) {

    const blocksToFeetConversion = 264;
    return Math.abs(endBlock - startBlock) * blocksToFeetConversion;
}

function calculatesFarePrice(startBlock, endBlock) {

    const feetTravelled = distanceTravelledInFeet(startBlock, endBlock);

    if (feetTravelled <= 400) {
        return 0;
    } else if (feetTravelled <= 2000) {
        return (feetTravelled - 400) * 0.02;
    } else if (feetTravelled <= 2500) {
        return 25;
    } else {
        return 'does not allow rides over 2500 feet', 'cannot travel that far'
    }
}

module.exports = {
    distanceFromHqInBlocks,
    distanceFromHqInFeet,
    distanceTravelledInFeet,
    calculatesFarePrice
};
