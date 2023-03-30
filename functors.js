// wrapper
const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.map((el) => el + 10).map((el) => el * 2);
console.log(nums, newNums);

function secureType(value) {
  return {
    value,
    invalid() {
      return this.value === null || this.value === undefined;
    },
    map(fn) {
      if (this.invalid()) {
        return secureType(null);
      } else {
        const newValue = fn(this.value);
        return secureType(newValue);
      }
    },
    flatMap(fn) {
      return this.map(fn).value;
    },
  };
}

const original = "Esse é um texto";
const result = secureType(original)
  .map((text) => text.toUpperCase())
  .map((t) => `${t}!!!!`)
  .flatMap((t) => t.split("").join(" "));

console.log(result);
