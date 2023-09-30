const getGender = (id: number) => {
  switch (id) {
    case 0:
      return "Not set / not specified";
    case 1:
      return "Female";
    case 2:
      return "Male";
    case 3:
      return "Non-binary";
  }
};

export default getGender;
