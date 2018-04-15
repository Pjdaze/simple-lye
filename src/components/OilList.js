import React from "react";
import styled from "styled-components";

const OilSapValues = [
  { Oil: "Almond Oil", LyeSapValue: 0.1367, PotassiumSapValue: 0.1925 },
  { Oil: "Aloe Vera Butter", LyeSapValue: 0.1788, PotassiumSapValue: 0.2518 },
  { Oil: "Aloe Vera Oil", LyeSapValue: 0.1421, PotassiumSapValue: 0.2001 },
  { Oil: "Apricot Kernel Oil", LyeSapValue: 0.1378, PotassiumSapValue: 0.1941 },
  { Oil: "Avocado Butter   ", LyeSapValue: 0.1339, PotassiumSapValue: 0.1886 },
  { Oil: "Avocado Oil", LyeSapValue: 0.1337, PotassiumSapValue: 0.1883 },
  { Oil: "Babassu Nut Oil", LyeSapValue: 0.1749, PotassiumSapValue: 0.2463 },
  { Oil: "Beeswax Animal   ", LyeSapValue: 0.0689, PotassiumSapValue: 0.097 },
  { Oil: "Borage Oil", LyeSapValue: 0.1339, PotassiumSapValue: 0.1886 },
  { Oil: "Candelilla Wax", LyeSapValue: 0.0322, PotassiumSapValue: 0.0454 },
  { Oil: "Canola Oil", LyeSapValue: 0.1328, PotassiumSapValue: 0.187 },
  {
    Oil: "Canola Oil, High Oleic Acid",
    LyeSapValue: 0.133,
    PotassiumSapValue: 0.187
  },
  { Oil: "Castor Bean Oil", LyeSapValue: 0.1286, PotassiumSapValue: 0.1811 },
  { Oil: "Cherry Kernel Oil", LyeSapValue: 0.1389, PotassiumSapValue: 0.1956 },
  { Oil: "Chicken Fat", LyeSapValue: 0.1356, PotassiumSapValue: 0.191 },
  { Oil: "Cocoa Butter", LyeSapValue: 0.1378, PotassiumSapValue: 0.1941 },
  {
    Oil: "Coconut Oil, Refined 76",
    LyeSapValue: 0.191,
    PotassiumSapValue: 0.269
  },
  {
    Oil: "Coconut Oil, Hydrogenated 92",
    LyeSapValue: 0.191,
    PotassiumSapValue: 0.269
  },
  {
    Oil: "Coconut Oil, Fractionated/Saturated",
    LyeSapValue: 0.2321,
    PotassiumSapValue: 0.3269
  },
  {
    Oil: "Copha Vegetable Shortening",
    LyeSapValue: 0.191,
    PotassiumSapValue: 0.269
  },
  { Oil: "Corn Oil", LyeSapValue: 0.1368, PotassiumSapValue: 0.1927 },
  { Oil: "Cottonseed Oil", LyeSapValue: 0.1387, PotassiumSapValue: 0.1954 },
  {
    Oil: "Crisco Vegetable Shortening",
    LyeSapValue: 0.1369,
    PotassiumSapValue: 0.1928
  },
  { Oil: "Emu Oil Animal", LyeSapValue: 0.1377, PotassiumSapValue: 0.1939 },
  {
    Oil: "Evening Primrose Oil",
    LyeSapValue: 0.1362,
    PotassiumSapValue: 0.1918
  },
  { Oil: "Flaxseed Oil", LyeSapValue: 0.1358, PotassiumSapValue: 0.1913 },
  { Oil: "Goat Fat", LyeSapValue: 0.1382, PotassiumSapValue: 0.1946 },
  { Oil: "Goose Fat", LyeSapValue: 0.1349, PotassiumSapValue: 0.19 },
  { Oil: "Grapeseed Oil ", LyeSapValue: 0.1321, PotassiumSapValue: 0.1861 },
  { Oil: "Hazelnut Oil ", LyeSapValue: 0.1369, PotassiumSapValue: 0.1928 },
  { Oil: "Hempseed Oil", LyeSapValue: 0.1359, PotassiumSapValue: 0.1914 },
  { Oil: "Jojoba Seed Oil ", LyeSapValue: 0.0695, PotassiumSapValue: 0.0979 },
  {
    Oil: "Jojoba Seed Liquid Wax",
    LyeSapValue: 0.0695,
    PotassiumSapValue: 0.0979
  },
  { Oil: "Karite Butter", LyeSapValue: 0.1296, PotassiumSapValue: 0.1825 },
  {
    Oil: "Kremelta Vegetable Shortening",
    LyeSapValue: 0.191,
    PotassiumSapValue: 0.269
  },
  { Oil: "Kukui Nut Oil", LyeSapValue: 0.1351, PotassiumSapValue: 0.1903 },
  { Oil: "Lanolin Animal", LyeSapValue: 0.1399, PotassiumSapValue: 0.197 },
  { Oil: "Lard Animal", LyeSapValue: 0.1358, PotassiumSapValue: 0.1913 },
  { Oil: "Linseed Oil", LyeSapValue: 0.1391, PotassiumSapValue: 0.1959 },
  { Oil: "Macadamia Nut Oil ", LyeSapValue: 0.1599, PotassiumSapValue: 0.2252 },
  { Oil: "Milk Fat", LyeSapValue: 0.1403, PotassiumSapValue: 0.1976 },
  { Oil: "Mink Oil", LyeSapValue: 0.1796, PotassiumSapValue: 0.253 },

  { Oil: "Neem Tree Oil", LyeSapValue: 0.1372, PotassiumSapValue: 0.1932 },
  { Oil: "Olive Oil ", LyeSapValue: 0.1353, PotassiumSapValue: 0.1906 },
  { Oil: "Ostrich Oil ", LyeSapValue: 0.1385, PotassiumSapValue: 0.1951 },
  { Oil: "Palm Kernel Oil ", LyeSapValue: 0.1777, PotassiumSapValue: 0.2503 },
  { Oil: "Palm Oil ", LyeSapValue: 0.142, PotassiumSapValue: 0.2 },
  { Oil: "Peach Kernel Oil", LyeSapValue: 0.1361, PotassiumSapValue: 0.1917 },
  { Oil: "Peanut Oil", LyeSapValue: 0.1367, PotassiumSapValue: 0.1925 },
  { Oil: "Pine Rosin", LyeSapValue: 0.1298, PotassiumSapValue: 0.182 },
  { Oil: "Pumpkin Seed Oil", LyeSapValue: 0.1389, PotassiumSapValue: 0.1956 },
  { Oil: "Rapeseed Oil", LyeSapValue: 0.1328, PotassiumSapValue: 0.187 },
  { Oil: "Rice Bran Oil", LyeSapValue: 0.1284, PotassiumSapValue: 0.1808 },
  {
    Oil: "Safflower Oil, High Linoleic Acid",
    LyeSapValue: 0.1374,
    PotassiumSapValue: 0.1935
  },
  {
    Oil: "Safflower Oil, High Oleic Acid ",
    LyeSapValue: 0.1369,
    PotassiumSapValue: 0.1928
  },
  { Oil: "Sesame Seed Oil ", LyeSapValue: 0.1336, PotassiumSapValue: 0.1882 },
  { Oil: "Shea Butter", LyeSapValue: 0.1296, PotassiumSapValue: 0.1825 },
  { Oil: "Soybean Oil", LyeSapValue: 0.1359, PotassiumSapValue: 0.1914 },
  {
    Oil: "Soybean Oil, 27.5% Hydrogenated",
    LyeSapValue: 0.1361,
    PotassiumSapValue: 0.1917
  },
  {
    Oil: "Stearic Acid, Animal-Source",
    LyeSapValue: 0.1413,
    PotassiumSapValue: 0.199
  },
  {
    Oil: "Stearic Acid, Vegetable-Source",
    LyeSapValue: 0.1411,
    PotassiumSapValue: 0.1987
  },
  { Oil: "Sunflower Seed Oil", LyeSapValue: 0.1358, PotassiumSapValue: 0.1913 },
  {
    Oil: "Sunflower Seed Oil, High Oleic Acid",
    LyeSapValue: 0.1351,
    PotassiumSapValue: 0.1903
  },
  { Oil: "Tallow, Beef ", LyeSapValue: 0.1419, PotassiumSapValue: 0.1999 },
  { Oil: "Tallow, Deer ", LyeSapValue: 0.1382, PotassiumSapValue: 0.1946 },
  { Oil: "Tallow, Sheep ", LyeSapValue: 0.1384, PotassiumSapValue: 0.1949 },
  { Oil: "Tamanu Seed Oil", LyeSapValue: 0.1437, PotassiumSapValue: 0.2024 },
  { Oil: "Tiaré Flower Oil ", LyeSapValue: 0.1796, PotassiumSapValue: 0.253 },
  { Oil: "Walnut Oil ", LyeSapValue: 0.1349, PotassiumSapValue: 0.19 },
  { Oil: "Wheat Germ Oil ", LyeSapValue: 0.1319, PotassiumSapValue: 0.1858 }
];

export default OilSapValues;
