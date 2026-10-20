import HashMap from "./hashMap.js";

const test = new HashMap();

// Set load factor to 0.75
test.loadFactor = 0.75;

// 1. Populate the hash map to its load factor
test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("=== Initial population ===");
console.log("Length:", test.length()); // Expected: 12
console.log("Capacity:", test.capacity); // Expected: 16
console.log("Load factor:", test.size / test.capacity); // Expected: 0.75

// 2. Overwrite existing keys
test.set("apple", "green");
test.set("banana", "brown");
test.set("lion", "yellow");

console.log("\n=== After overwriting ===");
console.log("Length:", test.length()); // Expected: 12
console.log("Capacity:", test.capacity); // Expected: 16
console.log("apple:", test.get("apple")); // Expected: "green"
console.log("banana:", test.get("banana")); // Expected: "brown"
console.log("lion:", test.get("lion")); // Expected: "yellow"

// 3. Trigger resizing
test.set("moon", "silver");

console.log("\n=== After resizing ===");
console.log("Length:", test.length()); // Expected: 13
console.log("Capacity:", test.capacity); // Expected: 32
console.log("Load factor:", test.size / test.capacity); // Expected: 0.40625

// 4. Verify entries survived resizing
console.log("\n=== Check values after resizing ===");
console.log("apple:", test.get("apple")); // Expected: "green"
console.log("banana:", test.get("banana")); // Expected: "brown"
console.log("carrot:", test.get("carrot")); // Expected: "orange"
console.log("lion:", test.get("lion")); // Expected: "yellow"
console.log("moon:", test.get("moon")); // Expected: "silver"

// 5. Test has()
console.log("\n=== has() ===");
console.log(test.has("apple")); // Expected: true
console.log(test.has("moon")); // Expected: true
console.log(test.has("unicorn")); // Expected: false

// 6. Test keys()
console.log("\n=== keys() ===");
console.log(test.keys());
// Expected: all 13 keys, including "moon"

// 7. Test values()
console.log("\n=== values() ===");
console.log(test.values());
// Expected: all 13 values, including "silver"

// 8. Test entries()
console.log("\n=== entries() ===");
console.log(test.entries());
// Expected: all 13 [key, value] pairs

// 9. Test remove()
console.log("\n=== remove() ===");
console.log(test.remove("banana")); // Expected: true (if your method returns true)
console.log(test.has("banana")); // Expected: false
console.log(test.length()); // Expected: 12

// Removing a nonexistent key should not change the length
console.log(test.remove("unicorn")); // Expected: false (if your method returns false)
console.log(test.length()); // Expected: 12

// 10. Test clear()
console.log("\n=== clear() ===");
test.clear();

console.log("Length:", test.length()); // Expected: 0
console.log("Keys:", test.keys()); // Expected: []
console.log("Values:", test.values()); // Expected: []
console.log("Entries:", test.entries()); // Expected: []
console.log("Capacity:", test.capacity); // Expected: 32, if clear preserves capacity
