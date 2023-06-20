let adaptedValues = {
  __typename: "Award",
  color: "#0828cc",
  createdTime: 1685983141071,
  description: "0ed1",
  filter: {
    filters: [
      {
        __typename: "GraphqlShifuFilter",
        allValuesAllowed: true,
        details: {},
        favourite: false,
        field: "TOTAL_POSTS",
        filterType: "GT",
        hidden: false,
        ignoreAddingToDimensionFilter: false,
        locked: false,
        lockedWithValues: false,
        mandatory: false,
        userFilter: false,
        values: [331213],
      },
    ],
  },
  imageUrl:
    "https://qa4-cdata-app.sprinklr.com/DAM/400002/0c6657a6-9539-4a89-b968-53b8f0276ca5-581050101/Screenshot_2023-03-07_at_1.51._p.png",
  modifiedTime: 1686811295735,
  name: "edo3",
  order: 65,
  ownerUser: {
    __typename: "User",
    name: "Chandrashekharmap Jinka(SU) ",
    profileImageUrl:
      "https://qa4-sprcdn-assets.sprinklr.com/400002/a1ff0e18-a58e-45ea-a354-19ff1aa4df76-924555875/Headline_0_2022-01-12_17_06_58_p.jpg",
    userId: 600000001,
  },
  customFields: [
    [
      {
        __typename: "GraphqlShifuFilter",
        allValuesAllowed: true,
        details: {},
        favourite: false,
        field: "TOTAL_POSTS",
        filterType: "GT",
        hidden: false,
        ignoreAddingToDimensionFilter: false,
        locked: false,
        lockedWithValues: false,
        mandatory: false,
        userFilter: false,
        values: [331213],
      },
    ],
  ],
  id: "647e0fa586419e0f99cdc340",
  colorCode: "#0828cc",
  picture:
    "https://qa4-cdata-app.sprinklr.com/DAM/400002/0c6657a6-9539-4a89-b968-53b8f0276ca5-581050101/Screenshot_2023-03-07_at_1.51._p.png",
};

adaptedValues.filter.filters[0].details = {};

console.log(adaptedValues);
