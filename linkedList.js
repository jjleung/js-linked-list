/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){

    let head = null;
    let tail = null

    let _createNode = function(value){
        return {
            value: value,
            next: null
        };
    }

    let getHead = function(){
        return head;
    }

    let getTail = function(){
        return tail;
    }

    let add = function(value){

        let newNode = _createNode(value);

        if(!head){
            head = newNode;
            tail = newNode;
            return newNode;
        }else{
            tail.next = newNode;
            tail = newNode;
            return newNode;
        }
    }

    let get = function(number){

        let curNode = head;

        for(let i = 0; i < number; i++){
        
            if(curNode.next){
                curNode = curNode.next;
            }else if(i < number){
                return false;
            }
        }
        return curNode;
    }

    let remove = function(number){
        if(!get(number)){ //removes edge: outside length
            return false;
        }

        //adding pointers to nodes
        let prevNode = get(number-1);
        let curNode = get(number);
        let nextNode = get(number+1);

        //edge: remove the head
        if(number === 0){ 

            head = nextNode; //reassign 'head' to next

        } else if(!nextNode){ //edge: remove the tail

            prevNode.next = null; //remove the previous tail
            tail.next = prevNode; // reassign 'tail' to new tail
            tail = prevNode;

        }else{
            prevNode.next = nextNode; //pointer skips over removed node
        }
    }

    let insert = function(value, number){

        if(!get(number) || number < 0){
            return false;
        }

        let newNode = _createNode(value);

        let prevNode = get(number-1);
        let curNode = get(number);
        let nextNode = get(number+1);

        if(curNode === head){
            head = newNode;
            newNode.next = curNode;
        }else{
            prevNode.next = newNode;
            newNode.next = curNode;
        }
    }

    return{
        getHead: getHead,
        getTail: getTail,
        add: add,
        get: get,
        remove: remove,
        insert: insert,
    }
}

var myLinkedList = linkedListGenerator();