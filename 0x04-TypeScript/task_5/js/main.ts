// Define branded types for MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  readonly __brand: "MajorCredits";
}

interface MinorCredits {
  credits: number;
  readonly __brand: "MinorCredits";
}

// Functions to sum credits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MajorCredits"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: "MinorCredits"
  };
}

// Example usage
const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
const totalMajor = sumMajorCredits(major1, major2);
console.log("Total Major Credits:", totalMajor.credits);

const minor1: MinorCredits = { credits: 2, __brand: "MinorCredits" };
const minor2: MinorCredits = { credits: 5, __brand: "MinorCredits" };
const totalMinor = sumMinorCredits(minor1, minor2);
console.log("Total Minor Credits:", totalMinor.credits);
