export const types = [
  {
    kind: 'hair',
    value: 'caesar',
  },
  {
    kind: 'hair',
    value: 'caesarSide',
  },
  {
    kind: 'hair',
    value: 'dreads',
  },
  {
    kind: 'hair',
    value: 'hat',
  },
  {
    kind: 'hair',
    value: 'hijab',
  },
  {
    kind: 'hair',
    value: 'turban',
  },
  {
    kind: 'hair',
    value: 'frizzle',
  },
  {
    kind: 'hair',
    value: 'hairFrida',
  },
  {
    kind: 'hair',
    value: 'hairBun',
  },
  {
    kind: 'hair',
    value: 'shaggyMullet',
  },
  {
    kind: 'hair',
    value: 'shaggyHair',
  },
  {
    kind: 'hair',
    value: 'shortCurly',
  },
  {
    kind: 'hair',
    value: 'shortFlat',
  },
  {
    kind: 'hair',
    value: 'shortHair',
  },
  {
    kind: 'hair',
    value: 'bald',
  },
  {
    kind: 'shirt',
    value: 'hoodie',
  },
  {
    kind: 'shirt',
    value: 'crewNeck',
  },
  {
    kind: 'shirt',
    value: 'vNeck',
  },
  {
    kind: 'shirt',
    value: 'graphic',
  },
  {
    kind: 'shirt',
    value: 'overall',
  },
  {
    kind: 'shirt',
    value: 'sweaterCollar',
  },
  {
    kind: 'shirt',
    value: 'scoopNeck',
  },
  {
    kind: 'eyes',
    value: 'closed',
  },
  {
    kind: 'eyes',
    value: 'cry',
  },
  {
    kind: 'eyes',
    value: 'dizzy',
  },
  {
    kind: 'eyes',
    value: 'eyeRoll',
  },
  {
    kind: 'eyes',
    value: 'happy',
  },
  {
    kind: 'eyes',
    value: 'heart',
  },
  {
    kind: 'eyes',
    value: 'side',
  },
  {
    kind: 'eyes',
    value: 'squint',
  },
  {
    kind: 'eyes',
    value: 'default',
  },
  {
    kind: 'eyes',
    value: 'surprised',
  },
  {
    kind: 'eyes',
    value: 'winkWacky',
  },
  {
    kind: 'eyes',
    value: 'wink',
  },
  {
    kind: 'mouth',
    value: 'concerned',
  },
  {
    kind: 'mouth',
    value: 'disbelief',
  },
  {
    kind: 'mouth',
    value: 'grimace',
  },
  {
    kind: 'mouth',
    value: 'sad',
  },
  {
    kind: 'mouth',
    value: 'screamOpen',
  },
  {
    kind: 'mouth',
    value: 'serious',
  },
  {
    kind: 'mouth',
    value: 'smile',
  },
  {
    kind: 'mouth',
    value: 'tongue',
  },
  {
    kind: 'mouth',
    value: 'twinkle',
  },
  {
    kind: 'mouth',
    value: 'vomit',
  },
  {
    kind: 'mouth',
    value: 'default',
  },
  {
    kind: 'glasses',
    value: 'none',
  },
  {
    kind: 'glasses',
    value: 'kurt',
  },
  {
    kind: 'glasses',
    value: 'prescriptionOne',
  },
  {
    kind: 'glasses',
    value: 'prescriptionTwo',
  },
  {
    kind: 'glasses',
    value: 'round',
  },
  {
    kind: 'glasses',
    value: 'wayfarers',
  },
  {
    kind: 'glasses',
    value: 'sunglasses',
  },
  {
    kind: 'facialHair',
    value: 'none',
  },
  {
    kind: 'facialHair',
    value: 'beardLight',
  },
  {
    kind: 'facialHair',
    value: 'beardMajestic',
  },
  {
    kind: 'facialHair',
    value: 'beardMedium',
  },
  {
    kind: 'facialHair',
    value: 'mustacheFancy',
  },
  {
    kind: 'facialHair',
    value: 'mustacheMagnum',
  },
];

export const colors = [
  {
    name: 'Tan',
    color: 'bodyColor',
    value: '#FD9841',
  },
  {
    name: 'Yellow',
    color: 'bodyColor',
    value: '#F8D25C',
  },
  {
    name: 'Pale',
    color: 'bodyColor',
    value: '#FFDBB4',
  },
  {
    name: 'Light',
    color: 'bodyColor',
    value: '#EDB98A',
  },
  {
    name: 'Brown',
    color: 'bodyColor',
    value: '#D08B5B',
  },
  {
    name: 'Dark Brown',
    color: 'bodyColor',
    value: '#AE5D29',
  },
  {
    name: 'Black',
    color: 'bodyColor',
    value: '#614335',
  },
];

type AvatarList = {
  key: string; // the title
  values: string[]; // return an array of values
};

export const getAvatarsByCategory = () => {
  const avatarList: AvatarList[] = []; // new array to push the key value eg key:eyes value: open / closed
  types.forEach((type) => {
    // for each is better for this as with map we will have to return something
    avatarList
      .find((avlist) => type.kind === avlist.key)
      //find a kind and push values of the same kind.
      ?.values.push(type.value) ??
      // else create a new kind
      avatarList.push({ key: type.kind, values: [type.value] });
  });
  return avatarList;
};

//   const kinds = types.reduce((kindsSoFar, { kind, value }) => {
//     if (!kindsSoFar[kind]) kindsSoFar[kind] = [];
//     kindsSoFar[kind].push(value);
//     return kindsSoFar;
//   }, {});
//   console.log(kinds);

//   const groups = types.reduce((typeMemo, { kind, value }) => {
//     (typeMemo[kind] = typeMemo[kind] || []).push(value);
//     return typeMemo;
//   }, {});
//   console.log(groups);

// work but need a bit of fixing up
