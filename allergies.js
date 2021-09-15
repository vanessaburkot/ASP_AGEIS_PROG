//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Vanessa Burkot A de Oliveira
export class Allergies {
  constructor(score) {
    this.score = score;
    this.types= {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };
  }
  list() {
    const allergies = [];
    for (const allergen in this.types) {
      if (this.score >= this.types[allergen] && this.score !== 0)
        allergies.unshift(allergen);
      this.score %= this.types[allergen];
    }
    return allergies;
  }
  allergicTo(type) {
    return this.list().includes(type);
  }
}