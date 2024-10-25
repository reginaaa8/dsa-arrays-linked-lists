/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  // _get helper function
  _get(idx) {
  let current = this.head;
  let count = 0;
  while (count < idx) {
    current = current.next;
    count++;
  }
  return current;
}

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);

    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length ++;

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
  let newNode = new Node(val);
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;  // Update tail when adding first node
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  this.length++;
}


  /** pop(): return & remove last item. */

  pop() {

    return this.removeAt(this.length-1);

  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0);

  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx >= this.length || idx < 0){
      throw new Error ("Error - Provide a valid index")
    }

    return this._get(idx).val;

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx >= this.length || idx < 0){
      throw new Error ("Error - Provide a valid index")
    }

    let current = this._get(idx);
    current.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0){
      throw new Error ("Error - Provide a valid index")
    }

    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);

    let previous = this._get(idx -1);
    let newNode = new Node(val);

    newNode.next = previous.next;
    previous.next = newNode;
    this.length++;

  }


  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx >= this.length || idx < 0) {
      throw new Error("Error - Provide a valid index");
    }

    let val;

    // special case for removing head
    if (idx === 0) {
      val = this.head.val;
      this.head = this.head.next;
      if (this.length === 1) {
        this.tail = null;
      }
    } else {
      let prev = this._get(idx - 1);
      val = prev.next.val;
      prev.next = prev.next.next;

      // special case for removing the tail
      if (idx === this.length - 1) {
        this.tail = prev;
      }
    }

    this.length--;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let total = 0;
    let current = this.head;

    while (current) {
      total += current.val;
      current = current.next;
    }

    return total / this.length;
  }
}

module.exports = LinkedList;
