const library = {
  books: [
    { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }
  ],

  addBook(book) {
    // 🔴 BUG FIX 1:
    // Earlier, we assumed 'book' will always be an object.
    // If someone passes null / string / undefined → code can break.
    if (!book || typeof book !== "object") {
      console.log("Invalid book data.");
      return;
    }

    // 🔴 BUG FIX 2:
    // Extract properties safely
    const { title, author, year } = book;

    // 🔴 BUG FIX 3:
    // Original issue: your input was missing 'title'
    // So this condition became true and book was NOT added
    if (!title || !author || !year) {
      console.log("Book information is incomplete.");
      return;
    }

    // 🔴 IMPROVEMENT:
    // Prevent duplicate books (not in original code)
    // Without this, same book could be added multiple times
    const exists = this.books.some(
      b => b.title.toLowerCase() === title.toLowerCase()
    );

    if (exists) {
      console.log("Book already exists.");
      return;
    }

    // ✅ Safe to add book
    this.books.push({ title, author, year });
    console.log(`Book "${title}" added successfully.`);
  },

  findBookByTitle(title) {
    // 🔴 IMPROVEMENT:
    // Original code was case-sensitive ("hobbit" !== "Hobbit")
    // This makes search more user-friendly
    const book = this.books.find(
      book => book.title.toLowerCase() === title.toLowerCase()
    );

    // 🔴 BUG FIX 4:
    // Original function returned undefined if not found
    // Now we handle it properly
    return book || "Book not found.";
  },

  removeBook(title) {
    // 🔴 IMPROVEMENT:
    // Case-insensitive matching
    const index = this.books.findIndex(
      book => book.title.toLowerCase() === title.toLowerCase()
    );

    if (index !== -1) {
      // 🔴 IMPROVEMENT:
      // Store removed book for better feedback
      const removed = this.books.splice(index, 1);
      console.log(`Book "${removed[0].title}" removed.`);
    } else {
      // ✅ Already handled correctly in original
      console.log("Book not found.");
    }
  },

  listBooks() {
    // 🔴 IMPROVEMENT:
    // Handle empty library case
    if (this.books.length === 0) {
      console.log("Library is empty.");
      return;
    }

    // 🔴 IMPROVEMENT:
    // Better formatted output
    this.books.forEach((book, index) => {
      console.log(
        `${index + 1}. ${book.title} by ${book.author} (${book.year})`
      );
    });
  }
};


// ❌ ORIGINAL BUG HERE:
library.addBook({ author: "George Orwell", year: 1949 });
// Missing 'title' → validation fails → book NOT added

// ✅ FIXED INPUT:
library.addBook({
  title: "1984",
  author: "George Orwell",
  year: 1949
});

console.log(library.books.length); // Now it will be 2