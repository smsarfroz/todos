let categoryName = {
  value: "",
  get getName() {
    return this.value;
  },
  set setName(newName) {
    this.value = newName;
  },
};

export { categoryName };
