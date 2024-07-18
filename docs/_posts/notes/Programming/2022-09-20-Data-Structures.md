---
layout: post
title:  "Data Structures"
date:   2022-08-20 18:41:19 +0530
categories: programming
author: "Akilax0"

---

# Data Structures

# Linked Lists

![image](/assets/notes/Programming/DataStructures/Untitled.png)

### Comparison

Limitation of arrays

- Need to know size at the start
- Can not go beyond that

Advantage of arrays

- Contiguous in memory (good cache locality if accessed sequentially)
- Very limited bookkeeping is required (only need to know the start of the array and size)

Linked list —> used when size not know and changes a lot

### Structure of linked list

- Head points to first element
- add/remove items as required
- Each element pointer to next
- No limit to how many elements we can have
- Additional storage for pointers.

In a program need to store on average N integers, Worst case can be 2N.

Array or linked?

### Functions

- add : add item to list
- remove : remove first item from the list
- delete : delete the given item of the list
- isEmpty : return true if list empty
- search : search if given item is there in list

# Queue

# Priority Queue

# Stack

# Hashing

# BST

# AVL Trees

# Heap