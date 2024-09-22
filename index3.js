function* generatePrimes(limit) {
    let num = 2; // Start with the first prime number

    while (num <= limit) {
        if (isPrime(num)) {
            yield num; // Yield the prime number
        }
        num++;
    }
}

// Helper function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
undefined
// Example usage: Generate prime numbers up to 10
const primeGenerator = generatePrimes(20);

for (const prime of primeGenerator) {
    console.log(prime);
}