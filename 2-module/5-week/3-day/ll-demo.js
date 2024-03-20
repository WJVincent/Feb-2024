class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }  
};

class LL {
    constructor(){
        this.head = null;
        this.length = 0;
    };

    addToHead(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
    };

    removeFromHead(){
        if(!this.head) throw new Error('the list is empty');

        const oldHead = this.head;
        this.head = oldHead.next;

        this.length--;
        return oldHead;
    };

    addToTail(val){
        const newNode = new Node(val);

        if(!this.head){
            this.head = newNode;
        } else {
            let curr = this.head;
    
            while(curr.next){
                curr = curr.next;
            };

            curr.next = newNode;
        };

        this.length++;
        return this;
    };

    addToTailRec(val, curr=this.head){
        if(!curr){
            const newNode = new Node(val);
            this.head = newNode; 
            this.length++;
            return;
        };

        if(!curr.next){
            const newNode = new Node(val);
            curr.next = newNode;
            this.length++;    
            return;        
        }

        this.addToTailRec(val, curr.next);
    }

    removeFromTail(){
        if(!this.head) throw new Error('cannot remove tail from empty list');

        let curr = this.head;
        let prev;

        while(curr.next){
            prev = curr;
            curr = curr.next;
        };

        if(!prev){
            this.head = null;
        } else {
            prev.next = null;
        }

        this.length--;
        return curr;
    };

    traverseIter(){
        if(!this.head) return;

        let curr = this.head;

        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
    };

    traverseRec(curr=this.head){
        if(!curr) return 'done';
        console.log(curr.val);
        this.traverseRec(curr.next);
    }
};