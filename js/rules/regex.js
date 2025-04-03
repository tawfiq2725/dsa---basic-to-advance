/*
## **Regular Expressions (Regex) - Explanation & Examples**  

A **Regular Expression (Regex)** is a pattern used to match and manipulate text. It is commonly used for tasks like **searching, replacing, validating, and extracting** specific patterns in strings.

---

# **Basic Regex Rules**

### **1. Literal Characters**
- Matches exact characters as they appear.
- **Example:** `/cat/` → matches `"cat"` in `"I have a cat"`

### **2. Character Classes (`[]`)**
- Matches any **one** character inside the brackets.
- **Example:** `/[aeiou]/` → matches any vowel.
  - `"hello"` → matches `"e", "o"`

#### **Negated Character Class (`[^]`)**
- `[^]` negates the set (matches anything **except** what's inside).
- **Example:** `/[^0-9]/` → matches any **non-digit** character.

### **3. Ranges (`-`)**
- A shorthand to specify a range of characters.
- **Example:** `/[a-z]/` → matches any **lowercase letter**.
  - `/[A-Z]/` → matches any **uppercase letter**.
  - `/[0-9]/` → matches any **digit**.

---

# **Quantifiers**
Control how many times a character or group appears.

### **4. `+` (One or More)**
- Matches **at least one** occurrence.
- **Example:** `/a+/` → matches `"aaa"` in `"baaad"`.

### **5. `*` (Zero or More)**
- Matches **zero or more** occurrences.
- **Example:** `/go*d/` → matches `"gd"`, `"god"`, `"good"`, `"goood"`.

### **6. `?` (Zero or One)**
- Matches **optional** occurrences (0 or 1).
- **Example:** `/colou?r/` → matches both `"color"` and `"colour"`.

### **7. `{n}` (Exact Count)**
- Matches **exactly** `n` occurrences.
- **Example:** `/o{2}/` → matches `"oo"` in `"book"`.

### **8. `{n,}` (At Least `n` Times)**
- Matches **at least** `n` occurrences.
- **Example:** `/o{2,}/` → matches `"oo"`, `"ooo"`, `"oooo"`.

### **9. `{n,m}` (Between `n` and `m` Times)**
- Matches **between `n` and `m` occurrences**.
- **Example:** `/o{2,4}/` → matches `"oo"`, `"ooo"`, `"oooo"` but not `"o"` or `"ooooo"`.

---

# **Anchors**
Anchors match positions **rather than characters**.

### **10. `^` (Start of String)**
- Matches the **beginning** of a string.
- **Example:** `/^Hello/` → matches `"Hello world"`, but not `"world Hello"`.

### **11. `$` (End of String)**
- Matches the **end** of a string.
- **Example:** `/world$/` → matches `"Hello world"`, but not `"world Hello"`.

---

# **Groups & Alternation**
### **12. `()` (Grouping)**
- Groups parts of a pattern together.
- **Example:** `/(abc)+/` → matches `"abcabcabc"`.

### **13. `|` (OR Operator)**
- Matches **either** pattern before or after `|`.
- **Example:** `/apple|banana/` → matches `"apple"` or `"banana"`.

---

# **Meta Characters**
### **14. `.` (Any Character)**
- Matches **any single** character (except newline `\n`).
- **Example:** `/c.t/` → matches `"cat"`, `"cut"`, `"cot"`, etc.

### **15. `\d` (Digit)**
- Matches **any digit (`0-9`)**.
- **Example:** `/\d+/` → matches `"123"` in `"car123bus"`.

### **16. `\D` (Non-Digit)**
- Matches **any non-digit** character.
- **Example:** `/\D+/` → matches `"car"` in `"car123bus"`.

### **17. `\w` (Word Character)**
- Matches **letters, numbers, and underscores** (`a-z`, `A-Z`, `0-9`, `_`).
- **Example:** `/\w+/` → matches `"Hello123"` in `"Hello123!"`.

### **18. `\W` (Non-Word Character)**
- Matches **any non-word** character.
- **Example:** `/\W+/` → matches `"!"` in `"Hello123!"`.

### **19. `\s` (Whitespace)**
- Matches **spaces, tabs, and newlines**.
- **Example:** `/\s+/` → matches spaces in `"Hello  World"`.

### **20. `\S` (Non-Whitespace)**
- Matches **any character except whitespace**.
- **Example:** `/\S+/` → matches `"Hello"` in `"Hello  "`.

---

# **Examples**
### **1. Validate an Email**
```js
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("test@example.com")); // true
console.log(emailRegex.test("invalid@com")); // false
```
#### **Explanation:**
- `^` → Start of string
- `[a-zA-Z0-9._%+-]+` → Username part (letters, numbers, dots, etc.)
- `@` → Exact `@`
- `[a-zA-Z0-9.-]+` → Domain name
- `\.` → Exact `.`
- `[a-zA-Z]{2,}` → TLD (like `.com`, `.org`)
- `$` → End of string

---

### **2. Extract Numbers from a String**
```js
const str = "Order ID: 12345, Ref: 6789";
const numbers = str.match(/\d+/g);
console.log(numbers); // ["12345", "6789"]
```
#### **Explanation:**
- `\d+` → Matches **one or more digits**
- `g` → Global flag (find **all** matches)

---

### **3. Match a Phone Number Format**
```js
const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
console.log(phoneRegex.test("(123) 456-7890")); // true
console.log(phoneRegex.test("123-456-7890")); // false
```
#### **Explanation:**
- `^` → Start
- `\(\d{3}\)` → Area code `(123)`
- `\s` → Space `" "`
- `\d{3}` → Three digits
- `-` → Hyphen `"-"`
- `\d{4}` → Four digits
- `$` → End

---

### **4. Replace All Vowels with `*`**
```js
const str = "Hello World";
const newStr = str.replace(/[aeiou]/gi, "*");
console.log(newStr); // "H*ll* W*rld"
```
#### **Explanation:**
- `[aeiou]` → Matches vowels
- `g` → Global flag (replace all matches)
- `i` → Case-insensitive flag

---

## **When to Use Regex?**
✔ **Validating user input** (emails, phone numbers, passwords).  
✔ **Searching for patterns** (extracting hashtags, mentions, etc.).  
✔ **Replacing text dynamically** (removing spaces, formatting text).  
✔ **Extracting structured data** (dates, numbers, codes).  

---

## **Summary Table**

| Symbol  | Meaning |
|---------|---------|
| `.` | Any character |
| `\d` | Digit (0-9) |
| `\w` | Word character (a-z, A-Z, 0-9, _) |
| `\s` | Whitespace |
| `*` | 0 or more times |
| `+` | 1 or more times |
| `?` | 0 or 1 time |
| `{n}` | Exactly `n` times |
| `[a-z]` | Range (a to z) |
| `|` | OR (alternation) |
| `()` | Grouping |

Would you like me to explain any specific regex case? 🚀
*/