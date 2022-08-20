---
layout: post
title:  "Introduction To CryptoHack"
date:   2022-08-20 18:41:19 +0530
categories: cryptohack
author: "Akilax0"

---

# Introduction To CryptoHack

1. Each challenge is designed to help introduce you to a new piece of cryptography. Solving a challenge will require you to find a "flag".
    
    These flags will usually be in the format
    
    ```
    crypto{y0ur_f1rst_fl4g}
    ```
    
    . The flag format helps you verify that you found the correct solution.
    
    Try submitting this into the form below to solve your first challenge.
    
2. Run the attached Python script and it will output your flag.

output: 

```bash
python3 .\great_snakes.py
Here is your flag:
crypto{z3n_0f_pyth0n}
```

1. ASCII is a 7-bit encoding standard which allows the representation of text using the integers 0-127.
    
    Using the below integer array, convert the numbers to their corresponding ASCII characters to obtain a flag.
    
    ```
    [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]
    ```
    
    code: 
    
    ```python
    text = [99, 114, 121, 112, 116, 111, 123, 65, 83, 67, 73, 73, 95, 112, 114, 49, 110, 116, 52, 98, 108, 51, 125]
    
    for i in text:
        print(chr(i),end="")
    
    print("")
    ```
    
    output: 
    
    ```bash
    python3.exe .\ASCII.py
    crypto{ASCII_pr1nt4bl3}
    ```
    
2. When we encrypt something the resulting ciphertext commonly has bytes which are not printable ASCII characters. If we want to share our encrypted data, it's common to encode it into something more user-friendly and portable across different systems.
    
    Included below is a flag encoded as a hex string. Decode this back into bytes to get the flag.
    
    ```
    63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d
    ```
    
    code: 
    
    ```python
    s = "63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d"
    
    print(bytes.fromhex(s))
    ```
    
    output: 
    
    ```bash
    python3 .\Hex.py
    b'crypto{You_will_be_working_with_hex_strings_a_lot}'
    ```
    
3. Another common encoding scheme is Base64, which allows us to represent binary data as an ASCII string using 64 characters. One character of a Base64 string encodes 6 bits, and so 4 characters of Base64 encode three 8-bit bytes.
    
    Base64 is most commonly used online, so binary data such as images can be easily included into HTML or CSS files.
    
    Take the below hex string, *decode* it into bytes and then *encode* it into Base64.
    
    ```
    72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf
    ```
    
    code: 
    
    ```python
    import base64
    
    s = "72bca9b68fc16ac7beeb8f849dca1d8a783e8acf9679bf9269f7bf"
    
    print(base64.b64encode(bytes.fromhex(s)))
    ```
    
    output: 
    
    ```bash
    python3 Base64.py
    b'crypto/Base+64+Encoding+is+Web+Safe/'
    ```
    
4. Cryptosystems like RSA works on numbers, but messages are made up of characters. How should we convert our messages into numbers so that mathematical operations can be applied?
    
    The most common way is to take the ordinal bytes of the message, convert them into hexadecimal, and concatenate. This can be interpreted as a base-16 number, and also represented in base-10.
    
    To illustrate:
    
    message: HELLO
    
    ascii bytes: [72, 69, 76, 76, 79]
    
    hex bytes: [0x48, 0x45, 0x4c, 0x4c, 0x4f]
    
    base-16: 0x48454c4c4f
    
    base-10: 310400273487
    
    Convert the following integer back into a message:
    
    ```
    11515195063862318899931685488813747395775516287289682636499965282714637259206269
    ```
    
    code:
    
    ```python
    from Crypto.Util.number import *
    
    s = 11515195063862318899931685488813747395775516287289682636499965282714637259206269
    
    print(long_to_bytes(s))
    ```
    
    output:
    
    ```bash
    python3 .\BigIntegers.py
    b'crypto{3nc0d1n6_4ll_7h3_w4y_d0wn}'
    ```
    
5. XOR is a bitwise operator which returns 0 if the bits are the same, and 1 otherwise. In textbooks the XOR operator is denoted by ⊕, but in most challenges and programming languages you will see the caret `^` used instead.

| A | B | Output |
| --- | --- | --- |
| 0 | 0 | 0 |
| 0 | 1 | 1 |
| 1 | 0 | 1 |
| 1 | 1 | 0 |

For longer binary numbers we XOR bit by bit: `0110 ^ 1010 = 1100`. We can XOR integers by first converting the integer from decimal to binary. We can XOR strings by first converting each character to the integer representing the Unicode character. Given the string `"label"`, XOR each character with the integer `13`. Convert these integers back to a string and submit the flag as `crypto{new_string}`.

code:

```python
def xor(a,b):
    return a^b

s = "label"
c = 13

res = ""

for i in s:
    res+= chr(xor(ord(i),c))

print(res)
```

output:

```bash
python3 .\xor.py
aloha
```

1. In the last challenge, you saw how XOR worked at the level of bits. In this one, we're going to cover the properties of the XOR operation and then use them to undo a chain of operations that have encrypted a flag. Gaining an intuition for how this works will help greatly when you come to attacking real cryptosystems later, especially in the block ciphers category.
    
    There are four main properties we should consider when we solve challenges using the XOR operator
    
    ```
    Commutative: A ⊕ B = B ⊕ A
    Associative: A ⊕ (B ⊕ C) = (A ⊕ B) ⊕ C
    Identity: A ⊕ 0 = A
    Self-Inverse: A ⊕ A = 0
    ```
    
    Let's break this down. Commutative means that the order of the XOR operations is not important. Associative means that a chain of operations can be carried out without order (we do not need to worry about brackets). The identity is 0, so XOR with 0 "does nothing", and lastly something XOR'd with itself returns zero.
    
    Let's try this out in action! Below is a series of outputs where three random keys have been XOR'd together and with the flag. Use the above properties to undo the encryption in the final line to obtain the flag.
    
    ```
    KEY1 = a6c8b6733c9b22de7bc0253266a3867df55acde8635e19c73313
    KEY2 ^ KEY1 = 37dcb292030faa90d07eec17e3b1c6d8daf94c35d4c9191a5e1e
    KEY2 ^ KEY3 = c1545756687e7573db23aa1c3452a098b71a7fbf0fddddde5fc1
    FLAG ^ KEY1 ^ KEY3 ^ KEY2 = 04ee9855208a2cd59091d04767ae47963170d1660df7f56f5faf
    ```