const slugify = (text: string) => {
  return text.toLowerCase().replaceAll(' ', '-');
};

export { slugify };
