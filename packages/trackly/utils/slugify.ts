const slugify = (text: string) => {
  return text.toLowerCase().replace(' ', '-');
};

export { slugify };
