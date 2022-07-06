
class Node
{
    constructor()
    {
        let x;
        let y;
        let z;
    }
}
 
function push( head_ref, new_data)
{    let new_node = new Node();
    new_node.x = new_data;
  
    new_node.flag = 0;
    new_node.next = head_ref;
    head_ref = new_node;
    return head_ref;
}  
function detectLoop(h)
{
    while (h != null)
    {        if (h.flag == 1)
            return true;
        h.flag = 1;
        h = h.next;
    }
    return false;
}
    let head = null;
  
    head = push(head, 20);
    head = push(head, 4);
    head = push(head, 15);
    head = push(head, 10);
      head.next.next.next.next = head;
  
    if (detectLoop(head))
        document.write("Loop found");
    else
        document.write("No Loop");
