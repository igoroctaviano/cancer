import orderBy from 'lodash.orderby';

const nameToID = name => {
  // http://stackoverflow.com/questions/29258016/remove-special-symbols-and-extra-spaces-and-make-it-camel-case-javascript
  return name
    .trim() //might need polyfill if you need to support older browsers
    .toLowerCase() //lower case everything
    .replace(
      /([^A-Z0-9]+)(.)/gi, //match multiple non-letter/numbers followed by any character
      function(match) {
        return arguments[2].toUpperCase(); //3rd index is the character we need to transform uppercase
      }
    );
};

const organGroups = [
  'Abdomen/Chest Wall',
  'Adrenal',
  'Bladder',
  'Bone',
  'Brain',
  'Breast',
  'Colon',
  'Esophagus',
  'Extremities',
  'Gallbladder',
  'Kidney',
  'Liver',
  'Lung',
  'Lymph Node',
  'Mediastinum/Hilum',
  'Muscle',
  'Neck',
  'Other: Soft Tissue',
  'Ovary',
  'Pancreas',
  'Pelvis',
  'Peritoneum/Omentum',
  'Prostate',
  'Retroperitoneum',
  'Small Bowel',
  'Spleen',
  'Stomach',
  'Subcutaneous'
];

const descriptions = [
  'Heterogeneous',
  'Ill-defined',
  'Confluent',
  'Necrotic',
  'Cystic',
  'Cavitated',
  'Ground Glass',
  'Solid',
  'Likely Benign'
];

const descriptionItems = orderBy(
  descriptions.map(name => {
    return {
      label: name,
      value: nameToID(name)
    };
  }),
  ['label'],
  ['asc']
);

const labelItems = orderBy(
  organGroups.map(name => {
    return {
      label: name,
      value: nameToID(name)
    };
  }),
  ['label'],
  ['asc']
);

export { labelItems, descriptionItems };
