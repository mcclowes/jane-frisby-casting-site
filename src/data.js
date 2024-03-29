import _slugify from "slugify";
import marked from "marked";

import rawdata from "./rawdata";

const slugify = (x) =>
  _slugify(x, {
    lower: true,
    remove: /[$*_+~.()'"!\-:@]/g,
  });

// transform a field or do something to an existing field to add a new one
const adjustFields = (a, b, fn) => (fieldsObj) => ({
  ...fieldsObj,
  ...(fieldsObj[a] ? { [b]: fn(fieldsObj[a]) } : {}),
});

// transform an array of objects to a map of objects, where the keys are object.slug
const makeMapUsingSlugs = (list) => {
  return list.reduce(
    (acc, item) => ({
      ...acc,
      [item.slug]: item,
    }),
    {}
  );
};

const shapeImageField = (o) => {
  if (o.fields) {
    const {
      fields: {
        file: {
          url,
          details: {
            size,
            image: { width, height },
          },
          fileName,
          contentType,
        },
      },
    } = o;

    return {
      contentType,
      fileName,
      height,
      size,
      url,
      width,
    };
  } else {
    return o;
  }
};

const defaultFieldShaping = R.pipe(
  adjustFields("image", "image", shapeImageField),
  adjustFields("title", "slug", slugify),
  adjustFields("content", "html", marked)
);

const dataObj = {};
rawdata.items.forEach((item) => {
  const itemType = item.sys.contentType.sys.id;
  const shapedItem = {
    ...defaultFieldShaping(item.fields),
    createdAt: item.sys.createdAt,
  };

  dataObj[itemType] = dataObj[itemType]
    ? dataObj[itemType].concat(shapedItem)
    : [shapedItem];
});

// shape the data however you want my guy
const homePage = R.pipe(adjustFields("hero", "hero", shapeImageField))(
  dataObj.homePage[0]
);
homePage.aboutTextHtml = marked(homePage.aboutText1)

const aboutPage = dataObj.pages.find((o) => o.slug === "about");
const contactPage = dataObj.pages.find((o) => o.slug === "contact");

const credits = R.map(R.pipe(adjustFields("description", "html", marked)))(
  dataObj.credits
);

const siteSettings = R.pipe(
  adjustFields("sitePic", "sitePic", shapeImageField)
)(dataObj.siteSettings[0]);

const retval = {
  ...dataObj,
  homePage,
  aboutPage,
  contactPage,
  credits,
  siteSettings,
  rawdata,
};

export default retval;
