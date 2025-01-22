const topDiameter = [
  41, 36, 42, 40, 36, 42, 44, 41, 30, 40, 40, 26, 39, 50, 36, 41, 41, 45, 30,
  39, 41, 41.2, 41.6, 41.5, 41.9, 41.2, 27.2, 26.5, 27.6, 27.3, 26.1, 25.5, 28,
  30, 40, 40, 26, 39, 50, 36, 41, 41, 45, 30, 39,
];

const bottomDiameter = [
  36, 34, 41, 39, 30, 40, 42, 40, 26, 39, 39, 24, 39, 50, 34, 36, 36, 43, 30,
  25, 36, 36.2, 36.7, 36.6, 36.4, 36.5, 24.5, 24.1, 24.3, 25.5, 24.7, 24.2, 40,
  26, 39, 39, 24, 39, 50, 34, 36, 36, 43, 30, 25,
];

const Models = [
  "3240SAA00/IND",
  "3287KCE00/IND",
  "3287QCD31/IND",
  "9151YAC00/IND",
  "9264YED00/IND",
  "2648NAE32/IND",
  "2648WAA00/IND",
  "1733KSA00/IND",
  "7133YAA00/IND",
  "6265SAA00/IND",
  "6265NAA00/IND",
  "6216WAA00/IND",
  "8060YAE00/IND",
  "2598YAB00/IND",
  "3299KSJ00/IND",
  "1163YAE00/IND",
  "1825YAA00/IND",
  "1824WAA00/IND",
  "1823SAB00/IND",
  "1585SAE00/IND",
  "3240SAA00/IND",
  "3240SAA00/IND",
  "2648NAE32/IND",
  "8060YAE00/IND",
  "1163YAE00/IND",
  "1733KSA00/IND",
  "3287KCE00/IND",
  "3287QCD31/IND",
  "9151YAC00/IND",
  "9264YED00/IND",
  "2648NAE32/IND",
  "2648WAA00/IND",
  "1733KSA00/IND",
  "7133YAA00/IND",
  "6265SAA00/IND",
  "6265NAA00/IND",
  "6216WAA00/IND",
  "8060YAE00/IND",
  "2598YAB00/IND",
  "3299KSJ00/IND",
  "1163YAE00/IND",
  "1825YAA00/IND",
  "1824WAA00/IND",
  "1823SAB00/IND",
  "1585SAE00/IND",
];

const reArrangeTopDValuesToAcedentingOrder = (topD, botD, models) => {
  for (let i = 1; i < topD.length; i++) {
    for (let j = 0; j < i; j++) {
      if (topD[j] > topD[i]) {
        let topDtemp = topD[i];
        let botDtemp = botD[i];
        let modelTemp = models[i];

        topD[i] = topD[j];
        botD[i] = botD[j];
        models[i] = models[j];

        topD[j] = topDtemp;
        botD[j] = botDtemp;
        models[j] = modelTemp;
      }
    }
  }
  console.log(topD);
  console.log(botD);
  console.log(models);
};

reArrangeTopDValuesToAcedentingOrder(topDiameter, bottomDiameter, Models);

export { topDiameter, bottomDiameter, Models };
