const topDiameter = [
  41, 36, 42, 40, 36, 42, 44, 41, 30, 40, 40, 26, 39, 50, 36, 41, 41, 45, 30,
  39,
];

const bottomDiameter = [
  36, 34, 41, 39, 30, 40, 42, 40, 26, 39, 39, 24, 39, 50, 34, 36, 36, 43, 30,
  25,
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
];

const Data = {};

const mergeData = (topD, bottomD, models) => {
  for (let i = 0; i < models.length; i++) {
    if (!Data[`${topD[i]}-${bottomD[i]}`]) {
      Data[`${topD[i]}-${bottomD[i]}`] = [models[i]];
    } else {
      Data[`${topD[i]}-${bottomD[i]}`] = [
        ...Data[`${topD[i]}-${bottomD[i]}`],
        models[i],
      ];
    }
  }
};

mergeData(topDiameter, bottomDiameter, Models);
export default Data;
