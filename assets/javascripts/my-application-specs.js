describe("Encrypt String", function() {
  it("returns the next character", function() {
    var expectations = {
      'a': 'b', 'b': 'c', 'c': 'd', 'd': 'e', 'e': 'f',
      'f': 'g', 'g': 'h', 'h': 'i', 'i': 'j', 'j': 'k',
      'k': 'l', 'l': 'm', 'm': 'n', 'n': 'o', 'o': 'p',
      'p': 'q', 'q': 'r', 'r': 's', 's': 't', 't': 'u',
      'u': 'v', 'v': 'w', 'w': 'x', 'x': 'y', 'y': 'z',
      'z': 'a',
      'A': 'B', 'B': 'C', 'C': 'D', 'D': 'E', 'E': 'F',
      'F': 'G', 'G': 'H', 'H': 'I', 'I': 'J', 'J': 'K',
      'K': 'L', 'L': 'M', 'M': 'N', 'N': 'O', 'O': 'P',
      'P': 'Q', 'Q': 'R', 'R': 'S', 'S': 'T', 'T': 'U',
      'U': 'V', 'V': 'W', 'W': 'X', 'X': 'Y', 'Y': 'Z',
      'Z': 'A'
    };

    for (var property in expectations) {
      if (expectations.hasOwnProperty(property)) {
        var charToEncrypt = property;
        var expectedEncryptedChar = expectations[property];

        expect(encrypt(charToEncrypt)).toEqual(expectedEncryptedChar);
      }
    }
  });

  it("when input string is 'television' it returns 'ufmfwjtjpo'", function() {
    expect(encrypt('television')).toEqual('ufmfwjtjpo');
  });

  it("can encrypt a word", function() {
    expect(encrypt('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')).
      toEqual('bcdefghijklmnopqrstuvwxyzaBCDEFGHIJKLMNOPQRSTUVWXYZA');
  });

  it("throws an exception if there is any character that does not belong to the latin alphabet", function() {
    expect(function() {
      encrypt("This includes the blank character that does not belong to latin alphabet")
    }).toThrowError(ArgumentError, "non-latin alphabet character encountered");
  });
})

describe("Testing 'mixStrings'", function() {

  beforeEach(function() {
    this.first = "foo"
    this.second = "bar"
  })
  it("should have the name 'mixStrings'", function() {
    expect(mixStrings).toBeDefined();
  })
  it("should take two string arguments", function() {
    expect(mixStrings.length).toEqual(2);
  })

  describe("when first string is empty '' null or undefined", function() {
    beforeEach(function() {
      this.first = ""
    })
    describe("and second string is 'klm'", function() {
      beforeEach(function() {
        this.second = "klm"
      })
      it("returns 'klm'", function() {
        expect(mixStrings(this.first, this.second)).toEqual('klm')
      })
    })

    describe("and second string is empty '' null or undefined", function() {
      beforeEach(function() {
        this.second = undefined
      })
      it("returns ''", function() {
        expect(mixStrings(this.first, this.second)).toEqual('')
      })
    })
  })
  describe("when first string is 'abc'", function() {
    describe("and the second string is empty '' or null or undefined", function() {
      it("should return 'abc'", function() {
        expect(mixStrings(this.first, '')).toEqual(this.first)
      })
    })

  })

  describe(`first string is 'foo'`, function() {
    describe(`and second string is 'bar'`, function() {

      it("should return 'fboaor'", function() {
        expect(mixStrings(this.first, this.second)).toEqual('fboaor')
      })
    })
  })
  describe(`first string is 'f'`, function() {
    describe(`and second string is 'b'`, function() {
      beforeEach(function() {
        this.first = "f"
        this.second = "b"
      })

      it("should return 'fb'", function() {
        expect(mixStrings(this.first, this.second)).toEqual('fb')
      })
    })
  })
})
